"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Brand } from "./brand";
import { startUrl, loginUrl } from "@/lib/config";
export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <Brand />
        <div className={"nav-links " + (open ? "open" : "")}>
          <Link href="/launchpad" onClick={() => setOpen(false)}>
            Launchpad <span className="new-pill">START HERE</span>
          </Link>
          <Link href="/solutions" onClick={() => setOpen(false)}>
            Solutions
          </Link>
          <Link href="/ai" onClick={() => setOpen(false)}>
            AI & automation
          </Link>
          <Link href="/platform" onClick={() => setOpen(false)}>
            Platform
          </Link>
          <Link href="/mission" onClick={() => setOpen(false)}>
            Our mission
          </Link>
        </div>
        <div className="nav-actions">
          <Link className="login" href={loginUrl}>
            Sign in
          </Link>
          <Link className="btn small" href={startUrl}>
            Build your business <ArrowUpRight size={15} />
          </Link>
          <button
            className="menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    </header>
  );
}
