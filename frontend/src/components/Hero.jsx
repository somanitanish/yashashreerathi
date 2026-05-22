import React from "react";
import AnimatedStat from "@/components/AnimatedStat";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const StatCard = ({ platform, value, suffix, format, sub, testId }) => (
  <div
    data-testid={testId}
    className="card-hover bg-white rounded-2xl p-5 sm:p-6 md:p-7"
    style={{ border: "1px solid #EFE6DC" }}
  >
    <p className="uppercase tracking-widest text-[0.65rem] sm:text-xs font-semibold" style={{ color: "#7D7D85" }}>
      {platform}
    </p>
    <AnimatedStat
      value={value}
      suffix={suffix}
      format={format}
      className="font-display mt-3 block"
      style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", color: "var(--pink)" }}
      testId={`${testId}-value`}
    />
    <p className="mt-2 text-xs sm:text-sm" style={{ color: "#6B6B72" }}>{sub}</p>
  </div>
);

export default function Hero() {
  return (
    <section id="home" data-testid="hero-section" className="relative overflow-hidden">
      {/* Decorative blobs (smaller on mobile) */}
      <div className="blob blob-pink hidden sm:block" style={{ width: 480, height: 480, left: -200, bottom: -120, opacity: 0.7 }} />
      <div className="blob blob-yellow hidden sm:block" style={{ width: 560, height: 560, right: -200, top: -180, opacity: 0.6 }} />
      <div className="blob blob-yellow sm:hidden" style={{ width: 280, height: 280, right: -120, top: -80, opacity: 0.55 }} />

      <div className="container-x relative" style={{ paddingTop: 48, paddingBottom: 72 }}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: copy */}
          <div className="relative z-10">
            <div
              className="inline-flex items-center gap-2 fade-up"
              style={{
                background: "var(--yellow)",
                borderRadius: 9999,
                padding: "8px 16px",
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
              }}
              data-testid="hero-badge"
            >
              <span
                style={{
                  width: 8, height: 8, borderRadius: 9999, background: "var(--pink)", display: "inline-block",
                }}
              />
              CREATOR MEDIA KIT — 2026
            </div>

            <h1
              data-testid="hero-name"
              className="font-display fade-up delay-1 mt-6 md:mt-8"
              style={{ fontSize: "clamp(2.2rem, 9vw, 5rem)" }}
            >
              <span style={{ display: "block", color: "var(--ink)" }}>YASHASHREE</span>
              <span style={{ display: "block", color: "var(--pink)" }}>RATHI</span>
            </h1>

            <p
              data-testid="hero-bio"
              className="fade-up delay-2 mt-6 md:mt-8 max-w-xl text-sm md:text-base"
              style={{ color: "#5A5A60", lineHeight: 1.7 }}
            >
              AI creator. Distribution partner. Build-in-public operator. I don't
              just post content. I document systems, test AI tools live, and build
              audience trust that compounds into real product adoption.
            </p>

            <div className="fade-up delay-3 mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4">
              <button
                data-testid="hero-cta-packages"
                onClick={() => scrollTo("packages")}
                className="btn-pink"
              >
                View Packages
              </button>
              <button
                data-testid="hero-cta-contact"
                onClick={() => scrollTo("contact")}
                className="btn-outline"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right: total reach + stat grid */}
          <div className="relative z-10 flex flex-col gap-5 md:gap-6">
            <div
              data-testid="total-reach-card"
              className="rounded-3xl p-6 md:p-8 fade-up delay-1"
              style={{ background: "var(--ink)", color: "#fff" }}
            >
              <p className="uppercase tracking-[0.18em] text-[0.65rem] md:text-xs font-semibold" style={{ color: "#9D9DA5" }}>
                Total Reach
              </p>
              <AnimatedStat
                value={900}
                suffix="K+"
                format="comma"
                className="font-display mt-3 md:mt-4 block"
                style={{ fontSize: "clamp(2.8rem, 11vw, 7rem)", color: "var(--pink)" }}
                testId="total-reach-value"
              />
              <div className="flex flex-wrap gap-2 mt-5 md:mt-6">
                {["USA", "Ireland", "UK", "India"].map((c) => (
                  <span
                    key={c}
                    className="text-[0.7rem] md:text-xs font-medium"
                    style={{
                      background: "#2A2A2E",
                      color: "#D8D8DE",
                      padding: "7px 14px",
                      borderRadius: 9999,
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              <StatCard testId="stat-instagram" platform="Instagram" value={25000} suffix="+" format="comma" sub="Primary platform" />
              <StatCard testId="stat-linkedin" platform="LinkedIn" value={950} suffix="+" format="comma" sub="Professional reach" />
              <StatCard testId="stat-youtube" platform="YouTube" value={800} suffix="+" format="comma" sub="Long-form content" />
              <StatCard testId="stat-newsletter" platform="Newsletter" value={300} suffix="+" format="comma" sub="Direct inbox" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
