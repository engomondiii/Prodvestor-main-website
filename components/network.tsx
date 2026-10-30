import {
  Globe,
  ShieldCheck,
  Mail,
  Sparkles,
  ArrowUpRight,
  Check,
} from "lucide-react";
export function Network() {
  return (
    <div
      className="network"
      aria-label="Illustration: your business connected to website, email, security and AI"
    >
      <div className="orbit o1" />
      <div className="orbit o2" />
      <div className="orbit o3" />
      <div className="orbit-line l1" />
      <div className="orbit-line l2" />
      <span className="orbit-node n1" />
      <span className="orbit-node n2" />
      <span className="orbit-node n3" />
      <div className="network-label">
        <span className="dot" /> YOUR NEXT CHAPTER STARTS HERE
      </div>
      <div className="network-chip chip-domain">
        <Globe size={20} />
        <span>
          Your own domain<small>Make it official.</small>
        </span>
        <Check size={14} />
      </div>
      <div className="network-chip chip-shield">
        <ShieldCheck size={20} />
        <span>Protected by design</span>
      </div>
      <div className="network-center">
        <div className="launch-label">
          <Sparkles size={16} /> PRODVESTOR LAUNCHPAD
          <ArrowUpRight size={16} />
        </div>
        <div className="mock-browser">
          <div className="browser-dots">
            <i />
            <i />
            <i />
            <span>yourbusiness.co.ke</span>
            <ShieldCheck size={11} />
          </div>
          <div className="mock-site">
            <div className="mock-nav">
              <b>YOUR BUSINESS.</b>
              <span>About &nbsp; Our work &nbsp; Contact</span>
            </div>
            <div className="mock-hero">
              <span>ROOTED HERE. READY FOR EVERYWHERE.</span>
              <strong>
                Small beginnings.
                <br />
                <em>Limitless potential.</em>
              </strong>
              <div className="mock-button">Discover what we do ↗</div>
              <div className="mock-landscape">
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        </div>
        <div className="launch-bottom">
          <span>
            <i className="dot" /> A brand that feels like you.
          </span>
          <span>01 / ∞</span>
        </div>
      </div>
      <div className="network-chip chip-mail">
        <Mail size={19} />
        <span>hello@yourbusiness.co.ke</span>
      </div>
      <div className="network-chip chip-ai">
        <Sparkles size={18} />
        <span>A little guidance. A big difference.</span>
      </div>
      <div className="network-caption">
        ONE BUSINESS. A WORLD OF POSSIBILITIES.
      </div>
    </div>
  );
}
