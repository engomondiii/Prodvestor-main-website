"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AskButton } from "./ask-prodvestor";
import { Brand } from "./brand";
import { startUrl, loginUrl } from "@/lib/config";
export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <Brand />
        <div id="site-navigation-links" className={"nav-links " + (open ? "open" : "")}>
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
          <Link className="mobile-account-link" href={loginUrl} onClick={() => setOpen(false)}>Sign in</Link>
          <Link className="mobile-account-link" href={startUrl} onClick={() => setOpen(false)}>Create a workspace <ArrowUpRight size={15} /></Link>
        </div>
        <div className="nav-actions">
          <AskButton compact label="Ask AI" />
          <Link className="login" href={loginUrl}>
            Sign in
          </Link>
          <Link className="btn small" href="/#domain-request">
            Choose your domain <ArrowUpRight size={15} />
          </Link>
          <button
            className="menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="site-navigation-links"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    </header>
  );
}
