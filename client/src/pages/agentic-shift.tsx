import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Check, ChevronDown, Award, FileText, Users, Target,
  Brain, Clock, MapPin, Calendar, ExternalLink, Lock,
  Shield, Database, Network, BarChart2, BookOpen,
  MessageSquare, Briefcase, Globe, X,
} from "lucide-react";

// ─── CONFIGURATION ────────────────────────────────────────
const SESSION_DATE     = new Date("2026-05-23T18:00:00+04:00");
// Replace with real Stripe payment links:
const STRIPE_EXEC_URL  = "https://buy.stripe.com/test_bJe8wO39WarYc63a1GbZe00";
const STRIPE_LEAD_URL  = "#register";  // https://buy.stripe.com/LEAD_LINK
const SESSION_CAPACITY = 10;

export type Tier = "executive" | "leadership";

const TIER_CONFIG = {
  executive: {
    label:    "Executive Tier",
    sub:      "C-Suite, SVP & Senior Leadership",
    price:    249,
    aed:      "AED 914",
    stripeUrl: STRIPE_EXEC_URL,
    badge:    "Live Virtual · Most Popular",
    perks: [
      "Priority access link and calendar invite confirmed instantly",
      "90-minute core session with a 35-minute live Q&A",
      "All 10 implementation artifacts in your inbox within 24 hours",
      "Agentic Readiness Scorecard benchmarked against MENA peers",
      "Lifetime access to the MENA AI Briefing",
      "Invitation to the private MENA executive community (WhatsApp and Slack)",
      "One 30-minute 1:1 session with Sharath, redeemable within 60 days",
      "Full session audio recording",
    ],
  },
  leadership: {
    label:    "Leadership Tier",
    sub:      "Directors & Senior Managers",
    price:    99,
    aed:      "AED 363",
    stripeUrl: STRIPE_LEAD_URL,
    badge:    "Live Virtual",
    perks: [
      "Live virtual attendance link and full recording access",
      "90-minute core session with a 35-minute live Q&A",
      "All 10 implementation artifacts in your inbox within 24 hours",
      "Agentic Readiness Scorecard benchmarked against MENA peers",
      "Lifetime access to the MENA AI Briefing",
      "Invitation to the private MENA executive community (WhatsApp and Slack)",
      "One 30-minute 1:1 session with Sharath, redeemable within 60 days",
    ],
  },
};

// ─── TIER-SPECIFIC PAGE COPY ──────────────────────────────
const TIER_PAGE_CONTENT = {
  executive: {
    pageTitle:      "The Agentic Shift: Executive Session | ForillonTech",
    heroSubtitle:   "The blueprint every MENA executive needs to move AI from pilot to P&L.",
    heroDesc:       "A closed-door 90-minute session with the USPTO-patented inventor of the human-bot orchestration layer. You will leave with the exact operating model MENA enterprises need to win with AI in the next 18 months. Not a framework deck. A working system.",
    heroBullets: [
      "A named framework you can present at your exec committee next Monday",
      "A readiness scorecard benchmarked against MENA peers. Runnable within one week.",
      "A 90-day execution plan with named owners and clear kill criteria",
      "10 professional artifacts in your inbox within 24 hours",
    ],
    problemSectionLabel: "The State of Enterprise AI · 2026",
    problemHeadline: "Your board is asking about agents. Your team is still running pilots that go nowhere.",
    problemDesc:     "These numbers never appear in the keynotes. They are the entire reason this session was built.",
    quotes: [
      "\"We hired a Chief AI Officer who inherited twelve pilots and no operating model.\"",
      "\"Our CFO is asking for ROI on AI and we don't have a defensible answer.\"",
      "\"Our board is asking about agents, and we're still debating ChatGPT licences.\"",
    ],
    quotesAttribution: "MENA executive, 2025",
    quotesConclusion:  "If your exec committee has said any of these in the past six months, you are not alone. This session addresses all three. Head on.",
    trapsIntro:      "Real companies. Real consequences. These exact patterns are playing out in MENA boardrooms right now.",
    trapsSubLabel:   "Act II · The Four Traps",
    playbookIntro:   "\"If anyone tells you this takes longer, what they are really telling you is that they don't want to move.\"",
    ctaCloser:       "Air Canada and DBS had access to the same models.",
    ctaCloserGold:   "The difference was the operating model.",
    ctaSeatsLine:    (remaining: number) => `Now it is yours. ${remaining} seats remain in this cohort.`,
  },
  leadership: {
    pageTitle:      "The Agentic Shift: Leadership Session | ForillonTech",
    heroSubtitle:   "The execution playbook every MENA director needs to build AI that actually ships.",
    heroDesc:       "A closed-door 90-minute session that gives you the operating model, the implementation framework, and the tools to deliver the AI results your leadership expects. Built by the USPTO-patented inventor of the human-bot orchestration layer. Not a strategy deck — a working system you can run from Monday.",
    heroBullets: [
      "A framework to structure your AI roadmap and defend it in any room",
      "Clear criteria for which pilots to kill, which to scale, and in what order",
      "A readiness scorecard your team can run in under a week — no consultants needed",
      "10 professional artifacts to help you deliver results, not just plan them",
    ],
    problemSectionLabel: "The Director's Reality · 2026",
    problemHeadline: "Your leadership handed you an AI mandate. Your team is stuck between pilots that never ship and vendors who overpromise.",
    problemDesc:     "These numbers explain why you feel the pressure you do — and why most directors in your position are operating without a real playbook.",
    quotes: [
      "\"I've been given an AI roadmap with no budget line, no team capacity, and a steering committee presentation in 60 days.\"",
      "\"Every vendor says their platform will solve it. I'm still fixing the same data pipeline from six months ago.\"",
      "\"My CXO wants to announce an AI win at the next all-hands. I need to figure out what 'done' actually looks like first.\"",
    ],
    quotesAttribution: "MENA director, 2025",
    quotesConclusion:  "If you have felt any of these in the past six months, you are not alone. This session was built specifically for the leader who has to make the strategy real. Head on.",
    trapsIntro:      "Real companies. Real consequences. These patterns play out in delivery teams across MENA right now — and when they fail, it is the director who carries the accountability.",
    trapsSubLabel:   "Act II · The Four Execution Traps",
    playbookIntro:   "\"The difference between a director who delivers and one who doesn't is almost never the strategy. It is always the operating model.\"",
    ctaCloser:       "DBS built 800+ AI models with zero material incidents.",
    ctaCloserGold:   "The difference was the operating model. Now it is yours.",
    ctaSeatsLine:    (remaining: number) => `${remaining} seats remain. Join the directors who will leave with a real execution system.`,
  },
};

const MENA_COUNTRIES = [
  "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman",
  "Jordan", "Egypt", "Lebanon", "Morocco", "Tunisia", "Turkey",
  "Pakistan", "India", "United Kingdom", "United States", "Other",
];

const PHONE_CODES = [
  { name: "UAE",            code: "+971" },
  { name: "Saudi Arabia",   code: "+966" },
  { name: "Qatar",          code: "+974" },
  { name: "Kuwait",         code: "+965" },
  { name: "Bahrain",        code: "+973" },
  { name: "Oman",           code: "+968" },
  { name: "Jordan",         code: "+962" },
  { name: "Egypt",          code: "+20"  },
  { name: "Lebanon",        code: "+961" },
  { name: "Morocco",        code: "+212" },
  { name: "Tunisia",        code: "+216" },
  { name: "Turkey",         code: "+90"  },
  { name: "Pakistan",       code: "+92"  },
  { name: "India",          code: "+91"  },
  { name: "United Kingdom", code: "+44"  },
  { name: "United States",  code: "+1"   },
  { name: "Other",          code: "+"    },
];

const COUNTRY_TO_CODE: Record<string, string> = Object.fromEntries(
  PHONE_CODES.filter(c => c.code !== "+").map(c => [c.name, c.code])
);

// ─── DESIGN TOKENS ────────────────────────────────────────
const C = {
  cream: "#FAF9F7", white: "#FFFFFF", warmLight: "#F5F2EC",
  navy: "#0D1B2A", navyMid: "#1E3A5F",
  gold: "#B8972B", goldLight: "#C9A84C", goldPale: "#F0E6C8",
  text: "#111111", textSecond: "#4A5568", textMuted: "#9CA3AF",
  border: "#E8E3DB", borderStrong: "#D4CBBE",
};
const serif = "'Playfair Display', Georgia, 'Times New Roman', serif";
const sans  = "'Inter', 'IBM Plex Sans', -apple-system, sans-serif";

// ─── HOOKS ────────────────────────────────────────────────
function useCountdown(target: Date) {
  const calc = () => {
    const d = target.getTime() - Date.now();
    if (d <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return { days: Math.floor(d/86400000), hours: Math.floor((d%86400000)/3600000),
             minutes: Math.floor((d%3600000)/60000), seconds: Math.floor((d%60000)/1000) };
  };
  const [t, setT] = useState(calc);
  useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id); }, []);
  return t;
}

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, v };
}

function useSeats() {
  const [seats, setSeats] = useState({ total: SESSION_CAPACITY, registered: 0, remaining: SESSION_CAPACITY });
  useEffect(() => {
    fetch("/api/session-seats")
      .then(r => r.json())
      .then(data => setSeats(data))
      .catch(() => {});
    const id = setInterval(() => {
      fetch("/api/session-seats")
        .then(r => r.json())
        .then(data => setSeats(data))
        .catch(() => {});
    }, 60_000);
    return () => clearInterval(id);
  }, []);
  return seats;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

// ─── REGISTRATION MODAL ───────────────────────────────────
interface RegModalProps {
  tier: Tier;
  onClose: () => void;
  isMobile?: boolean;
}

function RegistrationModal({ tier, onClose, isMobile }: RegModalProps) {
  const cfg = TIER_CONFIG[tier];
  const [name,         setName]         = useState("");
  const [email,        setEmail]        = useState("");
  const [phoneLocal,   setPhoneLocal]   = useState("");
  const [dialCode,     setDialCode]     = useState("+971");
  const [codeSearch,   setCodeSearch]   = useState("");
  const [showCodeDrop, setShowCodeDrop] = useState(false);
  const [country,      setCountry]      = useState("UAE");
  const [loading,      setLoading]      = useState(false);
  const [error,        setError]        = useState("");
  const codeDropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const code = COUNTRY_TO_CODE[country];
    if (code) setDialCode(code);
  }, [country]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (codeDropRef.current && !codeDropRef.current.contains(e.target as Node)) {
        setShowCodeDrop(false);
        setCodeSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filteredCodes = PHONE_CODES.filter(c =>
    c.name.toLowerCase().includes(codeSearch.toLowerCase()) ||
    c.code.includes(codeSearch)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phoneLocal.trim()) {
      setError("Please fill in all required fields.");
      return;
    }
    const fullPhone = `${dialCode} ${phoneLocal.trim()}`;
    setLoading(true);
    setError("");

    // Fire-and-forget: save lead data in background, don't block Stripe redirect
    fetch("/api/session-registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(), email: email.trim(), phone: fullPhone,
        country, tier, amount: cfg.price,
        sessionName: "The Agentic Shift",
        sessionDate: "23 May 2026",
        sessionVenue: "Virtual",
      }),
    }).catch(() => { /* non-blocking */ });

    // Redirect to Stripe immediately without waiting for API
    if (cfg.stripeUrl && !cfg.stripeUrl.startsWith("#")) {
      window.location.href = cfg.stripeUrl;
    } else {
      setLoading(false);
      onClose();
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "11px 14px", border: `1px solid ${C.border}`,
    borderRadius: 6, fontSize: 14, fontFamily: sans, color: C.text,
    background: C.cream, outline: "none", boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const modalPad = isMobile ? "20px 18px 18px" : "32px 32px 28px";

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 1000,
      background: "rgba(13,27,42,0.6)", backdropFilter: "blur(6px)",
      display: "flex", alignItems: isMobile ? "flex-end" : "center", justifyContent: "center",
      padding: isMobile ? 0 : 20,
    }} onClick={onClose}>
      <div style={{
        background: C.white,
        borderRadius: isMobile ? "16px 16px 0 0" : 14,
        width: "100%", maxWidth: isMobile ? "100%" : 460,
        boxShadow: "0 24px 80px rgba(13,27,42,0.25)",
        position: "relative", overflow: "visible",
        maxHeight: isMobile ? "92vh" : "auto",
        overflowY: isMobile ? "auto" : "visible",
      }} onClick={e => e.stopPropagation()}>
        <div style={{ height: 4, background: `linear-gradient(90deg, ${C.gold} 0%, ${C.goldLight} 100%)`, borderRadius: isMobile ? "16px 16px 0 0" : "14px 14px 0 0" }} />

        <div style={{ padding: modalPad }}>
          <button onClick={onClose} style={{ position: "absolute", top: 14, right: 14, background: "none", border: "none", cursor: "pointer", color: C.textMuted, padding: 4 }}>
            <X style={{ width: 18, height: 18 }} />
          </button>

          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.goldLight, margin: "0 0 6px" }}>
              {cfg.label} · ${cfg.price}
            </p>
            <h3 style={{ fontFamily: serif, fontSize: isMobile ? 20 : 24, fontWeight: 700, color: C.navy, margin: "0 0 4px" }}>
              Reserve your seat
            </h3>
            <p style={{ fontSize: 13, color: C.textMuted, margin: 0 }}>
              Complete your details and we'll take you straight to checkout.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: C.textSecond, display: "block", marginBottom: 5 }}>Full Name *</label>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Your full name"
                style={inputStyle} required onFocus={e => (e.target.style.borderColor = C.gold)}
                onBlur={e => (e.target.style.borderColor = C.border)} />
            </div>

            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: C.textSecond, display: "block", marginBottom: 5 }}>Work Email *</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com"
                style={inputStyle} required onFocus={e => (e.target.style.borderColor = C.gold)}
                onBlur={e => (e.target.style.borderColor = C.border)} />
            </div>

            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: C.textSecond, display: "block", marginBottom: 5 }}>Phone Number *</label>
              <div style={{ display: "flex", gap: 6, position: "relative" }} ref={codeDropRef}>
                <button type="button"
                  onClick={() => { setShowCodeDrop(p => !p); setCodeSearch(""); }}
                  style={{
                    flexShrink: 0, minWidth: 76, padding: "11px 8px",
                    border: `1px solid ${showCodeDrop ? C.gold : C.border}`,
                    borderRadius: 6, fontSize: 14, fontFamily: sans, fontWeight: 600,
                    color: C.text, background: C.cream, cursor: "pointer",
                    display: "flex", alignItems: "center", gap: 4, outline: "none",
                    transition: "border-color 0.2s",
                  }}>
                  {dialCode}
                  <ChevronDown style={{ width: 12, height: 12, color: C.textMuted, flexShrink: 0, transform: showCodeDrop ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                </button>

                {showCodeDrop && (
                  <div style={{
                    position: "absolute", top: "calc(100% + 6px)", left: 0, zIndex: 300,
                    background: C.white, border: `1px solid ${C.border}`, borderRadius: 8,
                    width: 240, boxShadow: "0 12px 32px rgba(13,27,42,0.15)",
                    display: "flex", flexDirection: "column", overflow: "hidden",
                  }}>
                    <div style={{ padding: "8px 10px", borderBottom: `1px solid ${C.border}`, background: C.cream }}>
                      <input autoFocus value={codeSearch} onChange={e => setCodeSearch(e.target.value)}
                        placeholder="Search country or code..."
                        style={{ width: "100%", padding: "7px 10px", border: `1px solid ${C.border}`, borderRadius: 5, fontSize: 13, fontFamily: sans, outline: "none", background: C.white, boxSizing: "border-box", color: C.text }} />
                    </div>
                    <div style={{ overflowY: "auto", maxHeight: 200 }}>
                      {filteredCodes.length === 0
                        ? <p style={{ fontSize: 13, color: C.textMuted, padding: "12px 14px", margin: 0 }}>No results</p>
                        : filteredCodes.map(c => (
                          <button key={`${c.code}-${c.name}`} type="button"
                            onClick={() => { setDialCode(c.code); setShowCodeDrop(false); setCodeSearch(""); }}
                            style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 14px", background: dialCode === c.code ? C.warmLight : "transparent", border: "none", cursor: "pointer", fontFamily: sans, borderBottom: `1px solid ${C.border}` }}>
                            <span style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>{c.code}</span>
                            <span style={{ fontSize: 12, color: C.textMuted }}>{c.name}</span>
                          </button>
                        ))
                      }
                    </div>
                  </div>
                )}

                <input type="tel" value={phoneLocal} onChange={e => setPhoneLocal(e.target.value)}
                  placeholder="50 123 4567" style={{ ...inputStyle, flex: 1 }} required
                  onFocus={e => (e.target.style.borderColor = C.gold)}
                  onBlur={e => (e.target.style.borderColor = C.border)} />
              </div>
              <p style={{ fontSize: 11, color: C.textMuted, marginTop: 4 }}>
                Country code set from your country selection below.
              </p>
            </div>

            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: C.textSecond, display: "block", marginBottom: 5 }}>Country</label>
              <div style={{ position: "relative" }}>
                <select value={country} onChange={e => setCountry(e.target.value)}
                  style={{ ...inputStyle, appearance: "none", cursor: "pointer", paddingRight: 32 }}>
                  {MENA_COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <ChevronDown style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, color: C.textMuted, pointerEvents: "none" }} />
              </div>
            </div>

            {error && <p style={{ fontSize: 13, color: "#B91C1C", margin: 0 }}>{error}</p>}

            <button type="submit" disabled={loading}
              style={{
                width: "100%", padding: "14px", border: "none", borderRadius: 8,
                cursor: loading ? "wait" : "pointer",
                background: loading ? C.textMuted : `linear-gradient(135deg, ${C.gold} 0%, ${C.goldLight} 100%)`,
                color: C.white, fontSize: 15, fontWeight: 700, fontFamily: sans,
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                marginTop: 4, transition: "opacity 0.2s",
              }}>
              {loading ? "Saving…" : <><span>Proceed to Checkout · ${cfg.price}</span><ArrowRight style={{ width: 16, height: 16 }} /></>}
            </button>

            <p style={{ fontSize: 11, color: C.textMuted, textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 5, margin: 0 }}>
              <Lock style={{ width: 11, height: 11 }} /> Secure checkout via Stripe · No card stored here
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

// ─── DATA ─────────────────────────────────────────────────
const TRAPS = [
  { n: "I",   title: "The Pilot Forever Trap",
    quote: "The graveyard is paved with promising proofs of concept.",
    co: "Zillow Offers · USA · 2021", loss: "$881M",
    story: "Zillow built an ML-powered home-flipping business with spectacular pilot results. By 2021: 7,000 unsellable homes, $881M write-down, 25% workforce laid off. The pilot measured prediction accuracy. It never measured market-turn robustness.",
    diag: "What does your pilot prove that production would disprove?" },
  { n: "II",  title: "The Vendor Dependency Trap",
    quote: "You do not own the part that touches your customer.",
    co: "McDonald's × IBM · USA · 2024", loss: "Contract terminated",
    story: "Three-year partnership. Viral videos showed the AI adding 260 Chicken McNuggets to one order. McDonald's terminated the contract in June 2024. McDonald's wore the brand damage. IBM did not.",
    diag: "If this vendor disappeared tomorrow, could you still operate?" },
  { n: "III", title: "The Talent Theatre Trap",
    quote: "Senior AI hiring without an operating model makes the problem more expensive.",
    co: "IBM Watson × MD Anderson · USA · 2017", loss: "$62M",
    story: "$62M partnership. An audit found Watson recommending 'unsafe and incorrect' cancer treatments. World-class oncologists. World-class AI engineers. Nobody owned the interface between them.",
    diag: "Who today owns the interface between your domain experts and your AI?" },
  { n: "IV",  title: "The Governance-After-the-Fact Trap",
    quote: "Policy follows incident. The incident is your policy document.",
    co: "NYC MyCity Chatbot · USA · 2024", loss: "Permanent reputational damage",
    story: "NYC's AI chatbot told business owners they could fire workers for reporting sexual harassment. All illegal. Governance was written after the news cycle. Not before.",
    diag: "What would you do if your AI caused a customer incident at 2 AM tomorrow?" },
];

const PILLARS = [
  { icon: Database,  n: "01", title: "Data Readiness",      patent: false,
    q: "Is our data actually agent-usable, or are we fooling ourselves?",
    case: "JPMorgan's COIN: 3 years on data foundations before 360,000 hours of legal review were saved annually." },
  { icon: Network,   n: "02", title: "Orchestration",       patent: true,
    q: "Who decides which system (human, model, or agent) handles which decision?",
    case: "Morgan Stanley Wealth GPT: 98% advisor adoption. The differentiator was the orchestration layer." },
  { icon: Shield,    n: "03", title: "Governance",          patent: false,
    q: "How do we approve, monitor, and stop an agent before it costs us?",
    case: "DBS Bank Singapore: 800+ AI models. Zero material incidents. $250M+ documented annual ROI." },
  { icon: Users,     n: "04", title: "Talent Architecture", patent: false,
    q: "What roles do we need, and which do we hire versus reskill?",
    case: "Shopify 2024: Before any team hires, they must prove AI cannot do the job." },
  { icon: BarChart2, n: "05", title: "Portfolio Discipline",patent: false,
    q: "How do we stop funding zombies and concentrate spend on P&L-tied bets?",
    case: "Klarna: Announced 700-agent equivalence, projected $40M profit impact. Then quietly rehired humans." },
];

const ARTIFACTS = [
  { icon: BarChart2,     n: "01", title: "Agentic Readiness Scorecard",   desc: "25-question diagnostic across 5 pillars. Automated radar chart, 0–100 score, MENA peer benchmarks." },
  { icon: Target,        n: "02", title: "AI Portfolio Canvas",            desc: "Single-page template evaluating any AI initiative across value, data, orchestration, regulatory, talent, and kill criteria." },
  { icon: FileText,      n: "03", title: "Vendor Diligence 20",            desc: "20 questions most AI vendors cannot answer. Orchestration, data, governance, economics, and exit." },
  { icon: BookOpen,      n: "04", title: "90-Day Executive Playbook",      desc: "30-page workbook with week-by-week RACI, governance council agendas, and one-page CFO conversation guide." },
  { icon: Award,         n: "05", title: "OOM Reference Card",             desc: "Print-ready A3. Five pillars, primary diagnostic, secondary check. Designed for the boardroom wall." },
  { icon: Shield,        n: "06", title: "AI Incident Response Playbook",  desc: "3-hour, 24-hour, and 7-day checklists. Comms templates for media, regulator, and customer scenarios." },
  { icon: Briefcase,     n: "07", title: "First 14 Days Notion Template",  desc: "Complete Notion workspace: meeting agendas, scorecard tracker, and kill list. Ready to duplicate on day one." },
  { icon: Globe,         n: "08", title: "MENA AI Briefing (Lifetime)",    desc: "Quarterly memo, 1,500 words. Each issue ends with early access to the next session." },
  { icon: MessageSquare, n: "09", title: "Private Executive Community",    desc: "Invitation-only WhatsApp/Slack. Strictly moderated. MENA C-suite only. No vendors." },
  { icon: Clock,         n: "10", title: "Implementation Clinic (30 min)",desc: "One free 30-min 1:1 with Sharath, redeemable within 60 days." },
];

const FAQS = [
  { q: "Who is this session built for?",
    a: "C-suite executives, SVPs, and senior directors responsible for AI strategy or transformation in MENA. If your board is asking about AI agents and you are still defining the roadmap, this session was built for you specifically." },
  { q: "What do I actually walk away with?",
    a: "Four things. A precise diagnosis of where your AI portfolio is stuck and exactly why. The OOM™ framework to present at your exec committee on Monday. A readiness scorecard you can run internally in under a week. A 90-day execution plan with named owners and clear kill criteria. Plus all 10 implementation artifacts in your inbox within 24 hours." },
  { q: "Is this session virtual?",
    a: "Yes, 100% virtual. You join live via a secure link delivered to your inbox after registration. A recording is available to all attendees. All 10 artifacts are in your inbox within 24 hours." },
  { q: "What are the two USPTO patents?",
    a: "US 11,509,770 covers human-bot orchestration: how autonomous agents hand decisions to humans and back. US 11,074,484 covers self-improving bot protocols. Both were filed before 'AI agent' entered mainstream vocabulary. LangChain, Microsoft Copilot Studio, AWS Bedrock Agents, and Google Vertex AI all implement variations of these architectures." },
  { q: "Is there a corporate or group rate?",
    a: "Yes. For 5 or more seats, contact us for group pricing. Private corporate sessions (the full playbook delivered exclusively for your organisation) start at $18,500." },
];

// ─── MAIN PAGE COMPONENT ──────────────────────────────────
interface AgenticShiftPageProps {
  tier?: Tier;
}

export default function AgenticShiftPage({ tier = "executive" }: AgenticShiftPageProps) {
  const cfg       = TIER_CONFIG[tier];
  const content   = TIER_PAGE_CONTENT[tier];
  const countdown = useCountdown(SESSION_DATE);
  const seats     = useSeats();
  const isMobile  = useIsMobile();
  const [openFaq,   setOpenFaq]   = useState<number | null>(null);
  const [navBg,     setNavBg]     = useState(false);
  const [showBar,   setShowBar]   = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.title = content.pageTitle;
    const handleScroll = () => { setNavBg(window.scrollY > 60); setShowBar(window.scrollY > 600); };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openReg = (e: React.MouseEvent) => { e.preventDefault(); setShowModal(true); };
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const s1 = useInView(); const s2 = useInView(); const s3 = useInView();
  const s4 = useInView(); const s5 = useInView(); const s6 = useInView();
  const s7 = useInView();
  const seatsFilledPct = (seats.registered / seats.total) * 100;

  const sectionPad = isMobile ? "56px 20px" : "96px 24px";

  return (
    <div style={{ background: C.cream, fontFamily: sans, color: C.text }}>
      {showModal && <RegistrationModal tier={tier} onClose={() => setShowModal(false)} isMobile={isMobile} />}

      {/* ── NAV ───────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, height: 60,
        background: navBg ? "rgba(250,249,247,0.96)" : "transparent",
        backdropFilter: navBg ? "blur(12px)" : "none",
        borderBottom: navBg ? `1px solid ${C.border}` : "none",
        transition: "all 0.3s ease", display: "flex", alignItems: "center",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 16px" : "0 24px", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: serif, fontSize: isMobile ? 17 : 20, fontWeight: 700, color: navBg ? C.navy : C.white, letterSpacing: "-0.02em" }}>
              Forillon<span style={{ color: C.goldLight }}>Tech</span>
            </span>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 12 : 32 }}>
            {!isMobile && ["The Session", "Framework", "Pricing"].map(l => (
              <button key={l} onClick={() => scrollTo("register")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, fontFamily: sans, color: navBg ? C.textSecond : "rgba(255,255,255,0.75)", fontWeight: 500, padding: 0 }}>{l}</button>
            ))}
            <button onClick={openReg} style={{ background: C.gold, color: C.white, border: "none", cursor: "pointer", fontSize: isMobile ? 12 : 13, fontFamily: sans, fontWeight: 600, padding: isMobile ? "9px 16px" : "10px 22px", borderRadius: 6, whiteSpace: "nowrap" }}>
              Reserve Your Seat
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{ background: C.navy, minHeight: isMobile ? "auto" : "100vh", display: "flex", alignItems: isMobile ? "flex-start" : "center", paddingTop: 60, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "radial-gradient(circle at 70% 50%, rgba(184,151,43,0.08) 0%, transparent 60%)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "28px 20px 48px" : "36px 24px 72px", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 400px", gap: isMobile ? 36 : 64, alignItems: "start" }}>

            {/* Left */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: isMobile ? 20 : 28, padding: "6px 14px", border: `1px solid rgba(184,151,43,0.4)`, borderRadius: 4 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.goldLight, display: "inline-block", animation: "pulse 2s infinite" }} />
                <span style={{ fontSize: 11, fontFamily: sans, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: C.goldLight }}>
                  {cfg.badge} · 23 May 2026
                </span>
              </div>

              <h1 style={{ fontFamily: serif, fontSize: isMobile ? "clamp(42px,11vw,56px)" : "clamp(56px,7vw,88px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em", color: C.white, margin: isMobile ? "0 0 20px" : "0 0 24px" }}>
                The <span style={{ color: C.goldLight }}>Agentic</span> Shift
              </h1>

              <p style={{ fontSize: isMobile ? 16 : 19, color: "rgba(255,255,255,0.65)", fontWeight: 400, lineHeight: 1.5, margin: isMobile ? "0 0 12px" : "0 0 14px", maxWidth: 520 }}>
                {content.heroSubtitle}
              </p>
              <p style={{ fontSize: isMobile ? 14 : 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: isMobile ? "0 0 28px" : "0 0 36px", maxWidth: 500 }}>
                {content.heroDesc}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: isMobile ? 28 : 40 }}>
                {content.heroBullets.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", border: `1px solid rgba(184,151,43,0.5)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      <Check style={{ width: 11, height: 11, color: C.goldLight }} />
                    </div>
                    <span style={{ fontSize: isMobile ? 14 : 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                <button onClick={openReg} style={{ background: C.goldLight, color: C.white, border: "none", cursor: "pointer", fontSize: isMobile ? 14 : 15, fontFamily: sans, fontWeight: 600, padding: isMobile ? "13px 24px" : "14px 32px", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
                  Reserve Your Seat <ArrowRight style={{ width: 16, height: 16 }} />
                </button>
                {!isMobile && (
                  <button onClick={() => scrollTo("framework")} style={{ background: "transparent", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer", fontSize: 14, fontFamily: sans, fontWeight: 500, padding: "14px 28px", borderRadius: 6 }}>
                    View the Framework
                  </button>
                )}
              </div>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", marginTop: 14, display: "flex", alignItems: "center", gap: 5 }}>
                <Lock style={{ width: 11, height: 11 }} /> Secure checkout via Stripe · Instant confirmation
              </p>
            </div>

            {/* Right: Session card */}
            <div style={{ background: C.cream, borderRadius: 12, padding: isMobile ? 20 : 28 }}>
              <p style={{ fontSize: 11, fontFamily: sans, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMuted, marginBottom: 12 }}>Session opens in</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6, marginBottom: 22 }}>
                {[{ l: "Days", v: countdown.days }, { l: "Hrs", v: countdown.hours }, { l: "Min", v: countdown.minutes }, { l: "Sec", v: countdown.seconds }].map(({ l, v }) => (
                  <div key={l} style={{ textAlign: "center", padding: isMobile ? "10px 4px" : "12px 6px", border: `1px solid ${C.border}`, borderRadius: 6, background: C.white }}>
                    <div style={{ fontFamily: sans, fontSize: isMobile ? 22 : 26, fontWeight: 700, color: C.navy, lineHeight: 1 }}>{String(v).padStart(2, "0")}</div>
                    <div style={{ fontSize: 10, color: C.textMuted, marginTop: 4, fontWeight: 500, letterSpacing: "0.05em" }}>{l}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingTop: 18, borderTop: `1px solid ${C.border}`, marginBottom: 18 }}>
                {[
                  { icon: Calendar, label: "Date",    val: "Saturday, 23 May 2026" },
                  { icon: Clock,    label: "Time",    val: "6:00 to 8:30 PM GST" },
                  { icon: Globe,    label: "Format",  val: "100% Virtual. Live Online." },
                  { icon: Users,    label: "Seats",   val: `${seats.remaining} of ${seats.total} remaining` },
                ].map(({ icon: Icon, label, val }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 30, height: 30, borderRadius: 6, background: C.warmLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ width: 14, height: 14, color: C.navy }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 10, color: C.textMuted, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: C.text, marginTop: 1 }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: C.warmLight, borderRadius: 8, padding: "10px 12px", marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#B45309" }}>{seats.remaining} seats left at this price</span>
                  <span style={{ fontSize: 12, color: C.textMuted }}>{seats.registered}/{seats.total} claimed</span>
                </div>
                <div style={{ height: 4, background: C.border, borderRadius: 2 }}>
                  <div style={{ height: 4, borderRadius: 2, background: C.gold, width: `${seatsFilledPct}%`, transition: "width 1s ease" }} />
                </div>
              </div>

              <button onClick={openReg} style={{ width: "100%", background: C.navy, color: C.white, border: "none", cursor: "pointer", fontSize: 15, fontFamily: sans, fontWeight: 600, padding: "14px", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                Secure Your Seat · ${cfg.price} <ArrowRight style={{ width: 15, height: 15 }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAND ────────────────────────────────────── */}
      <div style={{ background: C.white, borderBottom: `1px solid ${C.border}`, padding: isMobile ? "16px 20px" : "20px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: isMobile ? "12px 24px" : "16px 48px", alignItems: "center", justifyContent: "center" }}>
          {[
            { label: "IBM Inventor",            sub: "12 Years Enterprise AI" },
            { label: "USPTO Patent 11,509,770", sub: "Human-Bot Orchestration" },
            { label: "USPTO Patent 11,074,484", sub: "Self-Improving Bot Protocols" },
            { label: "10,000+",                 sub: "MENA Executive Relationships" },
            { label: "100% Virtual",              sub: "Live Online · 23 May 2026" },
          ].map(({ label, sub }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: isMobile ? 12 : 13, fontWeight: 700, color: C.navy }}>{label}</div>
              <div style={{ fontSize: 10, color: C.textMuted, marginTop: 2 }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── THE PROBLEM ───────────────────────────────────── */}
      <section style={{ background: C.cream, padding: sectionPad }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={s1.ref} style={{ opacity: s1.v ? 1 : 0, transform: s1.v ? "none" : "translateY(24px)", transition: "all 0.8s ease" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: isMobile ? 36 : 56 }}>
              <div style={{ height: 1, flex: 1, background: C.border }} />
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMuted, whiteSpace: "nowrap" }}>{content.problemSectionLabel}</span>
              <div style={{ height: 1, flex: 1, background: C.border }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : 48, marginBottom: isMobile ? 40 : 72, alignItems: "start" }}>
              <div>
                <h2 style={{ fontFamily: serif, fontSize: isMobile ? "clamp(28px,8vw,36px)" : "clamp(36px,4vw,52px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", color: C.navy, margin: "0 0 20px" }}>
                  {content.problemHeadline}
                </h2>
                <p style={{ fontSize: isMobile ? 15 : 17, color: C.textSecond, lineHeight: 1.7, margin: 0 }}>{content.problemDesc}</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: isMobile ? 16 : 24 }}>
                {[
                  { stat: "95%",   label: "Enterprise GenAI pilots deliver zero P&L impact",             source: "MIT NANDA" },
                  { stat: "30%",   label: "GenAI projects to be abandoned due to cost overruns and no ROI", source: "Gartner" },
                  { stat: "11%",   label: "Enterprises that have actually deployed AI at scale",          source: "McKinsey" },
                  { stat: "6 mo+", label: "How far behind schedule the average CEO says their AI is",    source: "IBM Study" },
                ].map(({ stat, label, source }) => (
                  <div key={stat} style={{ paddingTop: 16, borderTop: `3px solid ${C.gold}` }}>
                    <div style={{ fontFamily: serif, fontSize: isMobile ? 36 : 44, fontWeight: 700, color: C.navy, lineHeight: 1, marginBottom: 8 }}>{stat}</div>
                    <p style={{ fontSize: isMobile ? 12 : 13, color: C.textSecond, lineHeight: 1.5, margin: "0 0 8px" }}>{label}</p>
                    <p style={{ fontSize: 10, color: C.textMuted, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{source}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: C.white, borderRadius: 10, padding: isMobile ? 20 : 40, border: `1px solid ${C.border}` }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMuted, marginBottom: 24 }}>What MENA leaders are saying. Behind closed doors.</p>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: isMobile ? 20 : 32 }}>
                {content.quotes.map((q, i) => (
                  <div key={i} style={{ paddingLeft: 16, borderLeft: `3px solid ${C.goldLight}` }}>
                    <p style={{ fontSize: isMobile ? 14 : 15, fontFamily: serif, fontStyle: "italic", color: C.navy, lineHeight: 1.6, margin: "0 0 10px" }}>{q}</p>
                    <span style={{ fontSize: 10, fontWeight: 600, color: C.textMuted, letterSpacing: "0.06em" }}>{content.quotesAttribution}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: isMobile ? 13 : 14, color: C.textSecond, marginTop: 24, paddingTop: 20, borderTop: `1px solid ${C.border}` }}>
                {content.quotesConclusion.split(". Head on.")[0]}. <strong style={{ color: C.navy }}>Head on.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE FOUR TRAPS ────────────────────────────────── */}
      <section style={{ background: C.white, padding: sectionPad, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={s2.ref} style={{ opacity: s2.v ? 1 : 0, transform: s2.v ? "none" : "translateY(24px)", transition: "all 0.8s ease" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: isMobile ? 36 : 56 }}>
              <div style={{ height: 1, flex: 1, background: C.border }} />
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMuted, whiteSpace: "nowrap" }}>{content.trapsSubLabel}</span>
              <div style={{ height: 1, flex: 1, background: C.border }} />
            </div>
            <div style={{ marginBottom: 36 }}>
              <h2 style={{ fontFamily: serif, fontSize: isMobile ? "clamp(28px,8vw,36px)" : "clamp(36px,4vw,52px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", color: C.navy, margin: "0 0 14px" }}>
                Over $1 billion in losses.<br />Four traps. Every single one preventable.
              </h2>
              <p style={{ fontSize: isMobile ? 15 : 17, color: C.textSecond, lineHeight: 1.6, maxWidth: 600, margin: 0 }}>{content.trapsIntro}</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 16 : 24 }}>
              {TRAPS.map(t => (
                <div key={t.n} style={{ padding: isMobile ? 20 : 28, background: C.cream, borderRadius: 10, borderLeft: `4px solid ${C.gold}`, border: `1px solid ${C.border}`, borderLeftWidth: 4, borderLeftColor: C.gold }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.goldLight, marginBottom: 4 }}>Trap {t.n}</div>
                      <h3 style={{ fontFamily: serif, fontSize: isMobile ? 18 : 22, fontWeight: 700, color: C.navy, margin: 0, lineHeight: 1.2 }}>{t.title}</h3>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 14 }}>
                      <div style={{ fontSize: 10, color: C.textMuted, marginBottom: 2 }}>Loss</div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#B91C1C" }}>{t.loss}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, fontFamily: serif, fontStyle: "italic", color: C.textSecond, margin: "0 0 14px", lineHeight: 1.6 }}>"{t.quote}"</p>
                  <div style={{ background: C.white, borderRadius: 6, padding: "12px 14px", marginBottom: 14 }}>
                    <div style={{ fontSize: 10, fontWeight: 600, color: C.textMuted, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>{t.co}</div>
                    <p style={{ fontSize: 13, color: C.textSecond, lineHeight: 1.6, margin: 0 }}>{t.story}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: C.gold, flexShrink: 0, marginTop: 1 }}>DIAGNOSTIC</span>
                    <p style={{ fontSize: 13, fontStyle: "italic", color: C.textSecond, margin: 0, lineHeight: 1.5 }}>{t.diag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE FRAMEWORK ─────────────────────────────────── */}
      <section style={{ background: C.cream, padding: sectionPad, borderTop: `1px solid ${C.border}` }} id="framework">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={s3.ref} style={{ opacity: s3.v ? 1 : 0, transform: s3.v ? "none" : "translateY(24px)", transition: "all 0.8s ease" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: isMobile ? 36 : 56 }}>
              <div style={{ height: 1, flex: 1, background: C.border }} />
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMuted, whiteSpace: "nowrap" }}>Proprietary IP · Two USPTO Patents</span>
              <div style={{ height: 1, flex: 1, background: C.border }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 36 : 72, alignItems: "start" }}>
              <div>
                <h2 style={{ fontFamily: serif, fontSize: isMobile ? "clamp(28px,8vw,36px)" : "clamp(36px,4vw,52px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", color: C.navy, margin: "0 0 20px" }}>
                  The Orchestration<br />Operating Model™
                </h2>
                <p style={{ fontSize: isMobile ? 14 : 16, color: C.textSecond, lineHeight: 1.7, marginBottom: 20 }}>
                  Built over a decade. Formalised in two USPTO patents. Today, every serious agentic AI platform implements variations of what is inside these patents: LangChain, Microsoft Copilot Studio, AWS Bedrock Agents, Google Vertex AI. The architecture preceded them all.
                </p>
                <p style={{ fontSize: isMobile ? 14 : 16, color: C.textSecond, lineHeight: 1.7, marginBottom: 28 }}>
                  Five pillars. Operational, not strategic. You can assign owners to every pillar by Monday morning. No reorganisation. No consultants. Just clear ownership and a plan.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { num: "US 11,509,770", label: "Human-Bot Orchestration Layer" },
                    { num: "US 11,074,484", label: "Self-Improving Bot Protocols" },
                  ].map(({ num, label }) => (
                    <a key={num} href="https://patents.google.com/?inventor=%22Sharath+Kancharla%22&oq=inventor:+%22Sharath+Kancharla%22"
                      target="_blank" rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: C.white, borderRadius: 8, border: `1px solid ${C.border}`, textDecoration: "none" }}>
                      <Award style={{ width: 16, height: 16, color: C.gold, flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>{num}</div>
                        <div style={{ fontSize: 12, color: C.textMuted, marginTop: 1 }}>{label}</div>
                      </div>
                      <ExternalLink style={{ width: 12, height: 12, color: C.textMuted, flexShrink: 0 }} />
                    </a>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {PILLARS.map(({ icon: Icon, n, title, q, patent, case: cs }) => (
                  <div key={n} style={{ padding: "22px 0", borderBottom: `1px solid ${C.border}`, display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 38, height: 38, borderRadius: 6, background: patent ? C.navy : C.warmLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ width: 17, height: 17, color: patent ? C.goldLight : C.navy }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 10, fontWeight: 700, color: C.textMuted }}>{n}</span>
                        <span style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>{title}</span>
                        {patent && <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", padding: "2px 7px", background: C.goldPale, color: C.gold, borderRadius: 4, textTransform: "uppercase" }}>Patent IP</span>}
                      </div>
                      <p style={{ fontSize: 13, fontStyle: "italic", color: C.textSecond, margin: "0 0 6px", lineHeight: 1.5 }}>{q}</p>
                      <p style={{ fontSize: 12, color: C.textMuted, margin: 0, lineHeight: 1.5 }}>{cs}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTIFACTS ─────────────────────────────────────── */}
      <section style={{ background: C.white, padding: sectionPad, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={s4.ref} style={{ opacity: s4.v ? 1 : 0, transform: s4.v ? "none" : "translateY(24px)", transition: "all 0.8s ease" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: isMobile ? 36 : 56 }}>
              <div style={{ height: 1, flex: 1, background: C.border }} />
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMuted, whiteSpace: "nowrap" }}>The Overdeliver Kit · 24 Hours After the Session</span>
              <div style={{ height: 1, flex: 1, background: C.border }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 20 : 48, marginBottom: 40, alignItems: "start" }}>
              <div>
                <h2 style={{ fontFamily: serif, fontSize: isMobile ? "clamp(26px,7vw,34px)" : "clamp(32px,4vw,48px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", color: C.navy, margin: "0 0 14px" }}>You do not leave with ideas. You leave with 10 professional artifacts.</h2>
                <p style={{ fontSize: isMobile ? 15 : 17, color: C.textSecond, lineHeight: 1.6, margin: 0 }}>Not a certificate. Not a recording. A complete implementation kit. The tools that turn insight into an executable plan by Monday morning.</p>
              </div>
              {!isMobile && (
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
                  <button onClick={openReg} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, fontFamily: sans, fontWeight: 600, color: C.gold, display: "flex", alignItems: "center", gap: 6 }}>
                    Reserve your seat and receive all 10 <ArrowRight style={{ width: 15, height: 15 }} />
                  </button>
                </div>
              )}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2,1fr)", gap: 0 }}>
              {ARTIFACTS.map(({ icon: Icon, n, title, desc }, i) => (
                <div key={n} style={{ display: "flex", gap: 14, padding: isMobile ? "16px 0" : "18px 22px", borderBottom: `1px solid ${C.border}`, borderRight: !isMobile && i % 2 === 0 ? `1px solid ${C.border}` : "none" }}>
                  <div><span style={{ fontFamily: serif, fontSize: 24, fontWeight: 700, color: C.border, display: "block", lineHeight: 1, marginBottom: 10 }}>{n}</span></div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                      <Icon style={{ width: 13, height: 13, color: C.gold, flexShrink: 0 }} />
                      <span style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>{title}</span>
                    </div>
                    <p style={{ fontSize: 13, color: C.textSecond, lineHeight: 1.6, margin: 0 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SPEAKER ───────────────────────────────────────── */}
      <section style={{ background: C.cream, padding: sectionPad, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={s5.ref} style={{ opacity: s5.v ? 1 : 0, transform: s5.v ? "none" : "translateY(24px)", transition: "all 0.8s ease" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: isMobile ? 36 : 56 }}>
              <div style={{ height: 1, flex: 1, background: C.border }} />
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMuted, whiteSpace: "nowrap" }}>Your Speaker</span>
              <div style={{ height: 1, flex: 1, background: C.border }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "280px 1fr", gap: isMobile ? 32 : 72, alignItems: "start" }}>
              <div>
                <div style={{ width: 64, height: 64, borderRadius: 10, background: C.navy, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <span style={{ fontFamily: serif, fontSize: 22, fontWeight: 700, color: C.goldLight }}>SK</span>
                </div>
                <h3 style={{ fontFamily: serif, fontSize: isMobile ? 22 : 26, fontWeight: 700, color: C.navy, margin: "0 0 4px", lineHeight: 1.2 }}>Sharath Kancharla</h3>
                <p style={{ fontSize: 13, color: C.gold, fontWeight: 600, margin: "0 0 16px" }}>IBM Inventor · USPTO Patent Holder</p>
                <p style={{ fontSize: 13, color: C.textMuted, margin: "0 0 20px" }}>Dubai, UAE</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <a href="https://forillontech.com/about" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: C.navy, textDecoration: "none" }}>
                    <Globe style={{ width: 14, height: 14 }} /> Full biography <ExternalLink style={{ width: 11, height: 11 }} />
                  </a>
                  <a href="https://patents.google.com/?inventor=%22Sharath+Kancharla%22&oq=inventor:+%22Sharath+Kancharla%22" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: C.navy, textDecoration: "none" }}>
                    <Award style={{ width: 14, height: 14 }} /> USPTO patents <ExternalLink style={{ width: 11, height: 11 }} />
                  </a>
                </div>
              </div>
              <div>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {[
                    { label: "Patents",    val: "Inventor, USPTO 11,509,770 and 11,074,484. Human-Bot Orchestration and Self-Improving Bot Protocols. Filed before 'AI agent' entered mainstream vocabulary." },
                    { label: "Experience", val: "12 years leading enterprise AI delivery at IBM, Thomson Reuters, Hyundai, and MIT." },
                    { label: "Network",    val: "10,000+ MENA executive relationships built across a governance webinar series." },
                    { label: "Location",   val: "Dubai-based practitioner embedded inside a major MENA enterprise. Not a visiting consultant. Not a researcher. A practitioner with skin in the game." },
                    { label: "IP",         val: "Originator of the Orchestration Operating Model™. The framework that defines how agentic AI platforms are architected today." },
                  ].map(({ label, val }) => (
                    <div key={label} style={{ display: "grid", gridTemplateColumns: isMobile ? "80px 1fr" : "110px 1fr", gap: isMobile ? 14 : 24, padding: "18px 0", borderBottom: `1px solid ${C.border}` }}>
                      <span style={{ fontSize: 10, fontWeight: 700, color: C.textMuted, letterSpacing: "0.06em", textTransform: "uppercase", paddingTop: 2 }}>{label}</span>
                      <span style={{ fontSize: isMobile ? 14 : 15, color: C.text, lineHeight: 1.6 }}>{val}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 28, padding: isMobile ? 20 : 28, background: C.navy, borderRadius: 8 }}>
                  <p style={{ fontFamily: serif, fontSize: isMobile ? 15 : 18, fontStyle: "italic", color: C.white, lineHeight: 1.6, margin: "0 0 14px" }}>
                    "Air Canada argued their chatbot was a separate legal entity responsible for its own actions. The tribunal ruled: 'It should be obvious that Air Canada is responsible for all information on its website.'"
                  </p>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: 0 }}>Air Canada v. Jake Moffatt · 2024 · How this session opens</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 90-DAY PLAYBOOK ───────────────────────────────── */}
      <section style={{ background: C.white, padding: sectionPad, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={s6.ref} style={{ opacity: s6.v ? 1 : 0, transform: s6.v ? "none" : "translateY(24px)", transition: "all 0.8s ease" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: isMobile ? 36 : 56 }}>
              <div style={{ height: 1, flex: 1, background: C.border }} />
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMuted, whiteSpace: "nowrap" }}>The 90-Day Execution Plan</span>
              <div style={{ height: 1, flex: 1, background: C.border }} />
            </div>
            <h2 style={{ fontFamily: serif, fontSize: isMobile ? "clamp(24px,7vw,34px)" : "clamp(28px,3.5vw,44px)", fontWeight: 700, letterSpacing: "-0.02em", color: C.navy, margin: "0 0 8px" }}>Not eighteen months. Ninety days.</h2>
            <p style={{ fontSize: isMobile ? 14 : 16, color: C.textSecond, margin: "0 0 40px" }}>{content.playbookIntro}</p>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: isMobile ? 28 : 32 }}>
              {[
                { phase: "Days 0–30", title: "The Agentic Audit", color: C.gold,
                  items: ["Exec team fills Readiness Scorecard independently, then review the variance as a group", "Complete portfolio inventory: every AI initiative on one page", "Map each initiative to one of the four traps. Be honest.", "Executive readout benchmarked against MENA peers"] },
                { phase: "Days 31–60", title: "Portfolio Triage", color: C.navy,
                  items: ["The kill list: minimum 30% of pilots eliminated", "Concentrate funding on 2–3 elevated initiatives with real owners", "Run the Vendor Diligence 20 on every active contract", "Architecture review: does orchestration exist? If not, design it"] },
                { phase: "Days 61–90", title: "Operating Rhythm", color: "#1E3A5F",
                  items: ["Stand up the Agentic Governance Council. Weekly. 30 minutes.", "Install the weekly AI P&L view that goes to the CEO every Friday", "Train the first cohort of AI product owners", "First milestone: one agent in production with governance attached"] },
              ].map(({ phase, title, color, items }) => (
                <div key={phase} style={{ borderTop: `3px solid ${color}`, paddingTop: 22 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color, marginBottom: 8 }}>{phase}</div>
                  <h3 style={{ fontFamily: serif, fontSize: isMobile ? 18 : 22, fontWeight: 700, color: C.navy, margin: "0 0 18px" }}>{title}</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                    {items.map((item, i) => (
                      <li key={i} style={{ display: "flex", gap: 10, fontSize: isMobile ? 13 : 14, color: C.textSecond, lineHeight: 1.5 }}>
                        <Check style={{ width: 14, height: 14, color, flexShrink: 0, marginTop: 2 }} />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING (SINGLE TIER) ─────────────────────────── */}
      <section style={{ background: C.cream, padding: sectionPad, borderTop: `1px solid ${C.border}` }} id="register">
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <div ref={s7.ref} style={{ opacity: s7.v ? 1 : 0, transform: s7.v ? "none" : "translateY(24px)", transition: "all 0.8s ease" }}>
            <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 48 }}>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: C.textMuted, marginBottom: 14 }}>Invitation-Only · Limited to 10 Seats</p>
              <h2 style={{ fontFamily: serif, fontSize: isMobile ? "clamp(26px,8vw,36px)" : "clamp(32px,4vw,48px)", fontWeight: 700, letterSpacing: "-0.02em", color: C.navy, margin: "0 0 14px" }}>Secure your place before this cohort closes.</h2>
              <p style={{ fontSize: isMobile ? 15 : 17, color: C.textSecond, maxWidth: 440, margin: "0 auto 12px", lineHeight: 1.6 }}>
                Every seat includes all 10 implementation artifacts, delivered to your inbox within 24 hours. No upsells. No follow-up courses.
              </p>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#B45309" }}>{seats.remaining} seats left. This cohort does not reopen once full.</p>
            </div>

            <div style={{
              background: tier === "executive" ? C.navy : C.white,
              borderRadius: 12, overflow: "hidden",
              border: tier === "leadership" ? `1px solid ${C.border}` : "none",
              boxShadow: tier === "executive" ? "0 24px 64px rgba(13,27,42,0.18)" : "0 8px 32px rgba(13,27,42,0.06)",
            }}>
              <div style={{ height: 4, background: `linear-gradient(90deg, ${C.gold} 0%, ${C.goldLight} 100%)` }} />
              <div style={{ padding: isMobile ? 24 : 44 }}>
                <div style={{ marginBottom: 24 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.goldLight, margin: "0 0 8px" }}>{cfg.label}</p>
                  <h3 style={{ fontFamily: serif, fontSize: isMobile ? 20 : 26, fontWeight: 700, color: tier === "executive" ? C.white : C.navy, margin: "0 0 4px" }}>{cfg.sub}</h3>
                  <p style={{ fontSize: 13, color: tier === "executive" ? "rgba(255,255,255,0.4)" : C.textMuted, marginBottom: 20 }}>{cfg.badge}</p>
                  <div>
                    <span style={{ fontFamily: serif, fontSize: isMobile ? 52 : 64, fontWeight: 700, color: tier === "executive" ? C.white : C.navy, lineHeight: 1 }}>${cfg.price}</span>
                    <span style={{ fontSize: 15, color: tier === "executive" ? "rgba(255,255,255,0.4)" : C.textMuted, marginLeft: 8 }}>/ seat</span>
                    <div style={{ fontSize: 13, color: C.goldLight, marginTop: 4 }}>{cfg.aed}</div>
                  </div>
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {cfg.perks.map(item => (
                    <li key={item} style={{ display: "flex", gap: 12, fontSize: isMobile ? 14 : 15, color: tier === "executive" ? "rgba(255,255,255,0.8)" : C.textSecond, lineHeight: 1.4 }}>
                      <Check style={{ width: 15, height: 15, color: C.goldLight, flexShrink: 0, marginTop: 1 }} />{item}
                    </li>
                  ))}
                </ul>

                <button onClick={openReg}
                  style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "center", gap: 8, padding: "17px", background: C.goldLight, color: C.white, border: "none", borderRadius: 8, fontSize: isMobile ? 15 : 16, fontWeight: 700, fontFamily: sans, cursor: "pointer", boxSizing: "border-box" }}>
                  Reserve {cfg.label} · ${cfg.price} <ArrowRight style={{ width: 17, height: 17 }} />
                </button>
                <p style={{ fontSize: 12, color: tier === "executive" ? "rgba(255,255,255,0.25)" : C.textMuted, textAlign: "center", marginTop: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                  <Lock style={{ width: 11, height: 11 }} /> Secure checkout · Details saved for your 10-artifact delivery
                </p>
              </div>
            </div>

            <div style={{ marginTop: 18, padding: 16, background: C.white, borderRadius: 8, border: `1px solid ${C.border}`, textAlign: "center" }}>
              <p style={{ fontSize: isMobile ? 13 : 14, color: C.textSecond, margin: 0 }}>
                <strong style={{ color: C.navy }}>Bringing your leadership team?</strong> Group rates (5+ seats) and private corporate sessions from $18,500. <a href="/contact" style={{ color: C.gold, fontWeight: 600 }}>Contact us.</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section style={{ background: C.white, padding: sectionPad, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontFamily: serif, fontSize: isMobile ? "clamp(24px,7vw,32px)" : "clamp(28px,3.5vw,40px)", fontWeight: 700, letterSpacing: "-0.02em", color: C.navy, margin: "0 0 40px", textAlign: "center" }}>Questions</h2>
          <div>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderBottom: `1px solid ${C.border}` }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}>
                  <span style={{ fontSize: isMobile ? 14 : 16, fontWeight: 600, color: C.navy, fontFamily: sans, lineHeight: 1.4 }}>{faq.q}</span>
                  <ChevronDown style={{ width: 18, height: 18, color: C.gold, flexShrink: 0, transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform 0.3s" }} />
                </button>
                <div style={{ maxHeight: openFaq === i ? 300 : 0, overflow: "hidden", transition: "max-height 0.35s ease" }}>
                  <p style={{ fontSize: isMobile ? 14 : 15, color: C.textSecond, lineHeight: 1.7, paddingBottom: 20, margin: 0 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section style={{ background: C.navy, padding: sectionPad, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 60% 50%, rgba(184,151,43,0.06) 0%, transparent 55%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <p style={{ fontSize: isMobile ? 10 : 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: C.goldLight, marginBottom: 28 }}>DBS Bank Singapore · 800+ AI models · Zero material incidents · $250M+ annual ROI</p>
          <h2 style={{ fontFamily: serif, fontSize: isMobile ? "clamp(26px,7vw,40px)" : "clamp(32px,5vw,64px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", color: C.white, margin: "0 0 24px" }}>
            {content.ctaCloser}<br />
            <span style={{ color: C.goldLight }}>{content.ctaCloserGold}</span>
          </h2>
          <p style={{ fontSize: isMobile ? 15 : 18, color: "rgba(255,255,255,0.55)", margin: "0 0 10px" }}>
            <strong style={{ color: C.white }}>{content.ctaSeatsLine(seats.remaining)}</strong>
          </p>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", margin: "0 0 40px" }}>23 May 2026 · Virtual · Live Online · 6:00 PM GST</p>
          <button onClick={openReg}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: isMobile ? "15px 28px" : "17px 40px", background: C.goldLight, color: C.white, border: "none", borderRadius: 6, fontSize: isMobile ? 15 : 16, fontWeight: 700, fontFamily: sans, cursor: "pointer" }}>
            Reserve {cfg.label} · ${cfg.price} <ArrowRight style={{ width: 17, height: 17 }} />
          </button>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", marginTop: 18, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
            <Lock style={{ width: 11, height: 11 }} /> Secure checkout via Stripe · Instant confirmation · 10 artifacts within 24h
          </p>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer style={{ background: C.cream, borderTop: `1px solid ${C.border}`, padding: isMobile ? "24px 20px" : "28px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: isMobile ? 12 : 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href="/" style={{ textDecoration: "none", fontFamily: serif, fontSize: 17, fontWeight: 700, color: C.navy }}>
              Forillon<span style={{ color: C.goldLight }}>Tech</span>
            </a>
            <span style={{ color: C.border }}>·</span>
            <span style={{ fontSize: 12, color: C.textMuted }}>The Agentic Shift · Session 1</span>
          </div>
          {!isMobile && (
            <div style={{ display: "flex", gap: 24 }}>
              {[{ l: "About Sharath", h: "/about" }, { l: "Solutions", h: "/solutions" }, { l: "Contact", h: "/contact" }, { l: "Privacy", h: "/privacy-policy" }, { l: "Terms", h: "/terms-of-service" }].map(({ l, h }) => (
                <a key={l} href={h} style={{ fontSize: 12, color: C.textMuted, textDecoration: "none" }}>{l}</a>
              ))}
            </div>
          )}
          <p style={{ fontSize: 12, color: C.textMuted, margin: 0 }}>© 2026 ForillonTech. Dubai, UAE.</p>
        </div>
      </footer>

      {/* ── STICKY BOTTOM BAR ─────────────────────────────── */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50,
        background: C.white, borderTop: `1px solid ${C.border}`, padding: "12px 20px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transform: showBar ? "translateY(0)" : "translateY(100%)", transition: "transform 0.3s ease",
        boxShadow: "0 -4px 20px rgba(13,27,42,0.08)",
      }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 700, color: C.navy, margin: 0 }}>The Agentic Shift</p>
          <p style={{ fontSize: 12, color: C.textMuted, margin: 0 }}>May 23 · {seats.remaining} seats left</p>
        </div>
        <button onClick={openReg} style={{ padding: "10px 22px", background: C.gold, color: C.white, border: "none", borderRadius: 6, fontSize: 14, fontWeight: 700, fontFamily: sans, cursor: "pointer" }}>
          Reserve · ${cfg.price}
        </button>
      </div>
    </div>
  );
}
