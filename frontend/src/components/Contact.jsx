import React from "react";
import { Mail, Instagram, Send, ArrowUpRight } from "lucide-react";

const channels = [
  {
    Icon: Mail,
    label: "Email",
    value: "yashashreerathi@gmail.com",
    href: "mailto:yashashreerathi@gmail.com",
    testId: "contact-email",
  },
  {
    Icon: Instagram,
    label: "Instagram",
    value: "@yashashreerathi",
    href: "https://www.instagram.com/yashashreerathi?igsh=Nmgxd3RpaXJoeGNt&utm_source=qr",
    testId: "contact-instagram",
  },
  {
    Icon: Send,
    label: "Newsletter",
    value: "She Creates (Beehiiv)",
    href: "https://beacons.ai/shecreatescommunity",
    testId: "contact-newsletter",
  },
];

export default function Contact() {
  return (
    <footer
      id="contact"
      data-testid="contact-section"
      className="relative overflow-hidden"
      style={{ background: "var(--ink)", color: "#fff" }}
    >
      {/* faint blob */}
      <div
        className="blob"
        style={{
          width: 520, height: 520, right: -180, top: -180, background: "rgba(236,27,92,0.18)",
        }}
      />

      <div className="container-x relative section-pad">
        <p
          className="uppercase tracking-[0.18em] text-sm font-bold"
          style={{ color: "var(--yellow)" }}
          data-testid="contact-eyebrow"
        >
          Let's Build Together
        </p>

        <h2
          className="font-display mt-6"
          style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
          data-testid="contact-heading"
        >
          READY TO
          <br />
          REACH THE
          <br />
          <span style={{ color: "var(--pink)" }}>RIGHT PEOPLE?</span>
        </h2>

        <p className="mt-10 max-w-2xl" style={{ color: "#B9B9C0", fontSize: "1.05rem", lineHeight: 1.7 }}>
          My audience is actively building, learning, and buying. If your product
          belongs in their workflow — let's make sure they find it.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {channels.map(({ Icon, label, value, href, testId }) => (
            <a
              key={label}
              data-testid={testId}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group card-hover rounded-2xl p-7 flex flex-col gap-4"
              style={{ background: "#1A1A1D", border: "1px solid #26262A" }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="flex items-center justify-center rounded-xl"
                  style={{ width: 50, height: 50, background: "var(--pink)" }}
                >
                  <Icon size={24} color="#fff" strokeWidth={2.2} />
                </div>
                <ArrowUpRight
                  size={22}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  color="#9D9DA5"
                />
              </div>
              <div>
                <p className="uppercase tracking-widest text-xs font-semibold" style={{ color: "#9D9DA5" }}>
                  {label}
                </p>
                <p className="mt-2 text-lg font-semibold break-all" style={{ color: "#fff" }}>
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div
          className="mt-20 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm"
          style={{ borderTop: "1px solid #26262A", color: "#7C7C84" }}
        >
          <p>© {new Date().getFullYear()} Yashashree Rathi · Creator Media Kit</p>
          <p>Built for serious partners. Not for ad spam.</p>
        </div>
      </div>
    </footer>
  );
}
