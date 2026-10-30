import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "./brand";
import { startUrl } from "@/lib/config";
export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div>
            <Brand />
            <p>
              A world-class business starts
              <br />
              with the right foundations.
            </p>
            <span className="eyebrow">CLEAR THINKING. USEFUL TECHNOLOGY.</span>
          </div>
          <div>
            <h3>Start & grow</h3>
            <Link href="/launchpad">Launchpad</Link>
            <Link href="/solutions">Industry solutions</Link>
            <Link href="/ai">AI & automation</Link>
            <Link href="/platform">The platform</Link>
            <Link href="/pricing">Pricing & payments</Link>
          </div>
          <div>
            <h3>Prodvestor</h3>
            <Link href="/mission">Our mission</Link>
            <Link href="/docs">Resources</Link>
            <Link href="/contact">
              Talk to us <ArrowUpRight size={13} />
            </Link>
          </div>
          <div>
            <h3>Your next chapter</h3>
            <p>
              Bring the ambition.
              <br />
              We’ll help build the foundation.
            </p>
            <Link className="text-link" href={startUrl}>
              Let’s get started <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Prodvestor LTD · Nairobi, Kenya
          </span>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms & acceptable use</Link>
            <Link href="/domain-terms">Domain terms</Link>
          </div>
          <span>
            <i className="dot" /> Built around your business.
          </span>
        </div>
      </div>
    </footer>
  );
}
