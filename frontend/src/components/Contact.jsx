import React from "react";
import { Mail, Instagram, Newspaper } from "lucide-react";
import LeadForm from "@/components/LeadForm";

const channels = [
  {
    Icon: Mail,
    label: "EMAIL",
    value: "yashashreerathi@gmail.com",
    href: "mailto:yashashreerathi@gmail.com",
    testId: "contact-email",
  },
  {
    Icon: Instagram,
    label: "INSTAGRAM",
    value: "@yashashreerathi",
    href: "https://www.instagram.com/yashashreerathi?igsh=Nmgxd3RpaXJoeGNt&utm_source=qr",
    testId: "contact-instagram",
  },
  {
    Icon: Newspaper,
    label: "NEWSLETTER",
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
      className="relative"
    >
      {/* Dark contact hero band */}
      <div
        className="relative overflow-hidden"
        style={{ background: "var(--ink)", color: "#fff" }}
      >
        {/* radial pink glow center */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 45%, rgba(236,27,92,0.22) 0%, rgba(236,27,92,0.08) 35%, rgba(14,14,16,0) 70%)",
          }}
        />

        <div className="container-x relative section-pad text-center">
          <div
            data-testid="contact-eyebrow"
            className="inline-flex items-center gap-2 mx-auto"
            style={{
              background: "rgba(255,213,0,0.12)",
              border: "1px solid rgba(255,213,0,0.35)",
              borderRadius: 9999,
              padding: "8px 18px",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 8,
                height: 8,
                borderRadius: 9999,
                background: "var(--yellow)",
                display: "inline-block",
                boxShadow: "0 0 12px rgba(255,213,0,0.7)",
              }}
            />
            <span
              className="uppercase tracking-[0.22em] text-[0.7rem] md:text-xs font-bold"
              style={{ color: "var(--yellow)" }}
            >
              Let's Build Together
            </span>
          </div>

          <h2
            className="font-display mt-6 md:mt-8 mx-auto"
            style={{ fontSize: "clamp(2rem, 9vw, 6.5rem)", lineHeight: 0.98 }}
            data-testid="contact-heading"
          >
            <span className="block">READY TO</span>
            <span className="block">REACH THE</span>
            <span className="block mt-1 md:mt-2" style={{ color: "var(--pink)" }}>
              RIGHT PEOPLE?
            </span>
          </h2>

          <p
            className="mt-8 md:mt-10 max-w-2xl mx-auto text-sm md:text-base"
            style={{ color: "#B9B9C0", lineHeight: 1.7 }}
          >
            My audience is actively building, learning, and buying. If your
            product belongs in their workflow — let's make sure they find it.
          </p>

          {/* Lead-capture form */}
          <div className="mt-10 md:mt-14">
            <LeadForm />
          </div>

          {/* Channel cards */}
          <div className="grid sm:grid-cols-3 gap-4 md:gap-5 mt-10 md:mt-14 max-w-4xl mx-auto">
            {channels.map(({ Icon, label, value, href, testId }) => (
              <a
                key={label}
                data-testid={testId}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group rounded-2xl p-7 md:p-8 flex flex-col items-center text-center transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(236,27,92,0.06)";
                  e.currentTarget.style.borderColor = "rgba(236,27,92,0.4)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Icon
                  size={36}
                  strokeWidth={1.75}
                  className="transition-transform duration-300 group-hover:scale-110"
                  color="var(--pink)"
                />
                <p
                  className="uppercase tracking-[0.22em] mt-5 text-[0.7rem] md:text-xs font-semibold"
                  style={{ color: "#9D9DA5" }}
                >
                  {label}
                </p>
                <p className="mt-2 text-sm md:text-[0.95rem] font-semibold" style={{ color: "#fff", wordBreak: "break-word" }}>
                  {value}
                </p>
              </a>
            ))}
          </div>

          <p
            data-testid="contact-meta"
            className="mt-10 md:mt-14 text-xs md:text-sm"
            style={{ color: "#8A8A92" }}
          >
            Response time: 24–48 hours <span className="mx-2">·</span> Open to
            multi-platform partnerships <span className="mx-2">·</span> US, UK,
            Ireland, India reach
          </p>
        </div>
      </div>

      {/* Bottom cream strip */}
      <div style={{ background: "var(--cream)", borderTop: "1px solid #EDE3D8" }}>
        <div className="container-x py-10 md:py-14">
          <div className="grid md:grid-cols-3 items-center gap-6 md:gap-4 text-center md:text-left">
            <p
              data-testid="footer-logo"
              className="font-display"
              style={{ color: "var(--pink)", fontSize: "1.6rem", letterSpacing: "-0.01em" }}
            >
              YASHASHREE
            </p>

            <p
              className="text-sm md:text-base text-center"
              style={{ color: "#5A5A60" }}
              data-testid="footer-tagline"
            >
              She Creates Community <span className="mx-1.5">·</span> AI{" "}
              <span className="mx-1.5">·</span> Creator Economy{" "}
              <span className="mx-1.5">·</span> Build in Public
            </p>

            <p
              className="text-sm md:text-base md:text-right"
              style={{ color: "#5A5A60" }}
              data-testid="footer-tag"
            >
              Creator Media Kit 2026
            </p>
          </div>

          <div
            className="mt-8 md:mt-10 pt-6 md:pt-8 text-center text-xs md:text-sm"
            style={{ borderTop: "1px solid #EDE3D8", color: "#7C7C84" }}
            data-testid="footer-copyright"
          >
            © {new Date().getFullYear()} Yashashree. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
