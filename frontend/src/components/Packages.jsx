import React from "react";
import { Check } from "lucide-react";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const tiers = [
  {
    id: "seed",
    name: "SEED",
    price: "Starting at $500",
    best: "Best for: New tool launches, newsletter brands",
    items: [
      "1 sponsored newsletter mention (Beehiiv, 300+ readers)",
      "1 Instagram Reel with product integration",
      "1 LinkedIn post",
      "Custom tracking link + performance report",
      "Story reposts during activation week",
    ],
    featured: false,
  },
  {
    id: "growth",
    name: "GROWTH",
    price: "Starting at $1,500",
    best: "Best for: SaaS, AI tools, productivity apps",
    items: [
      "1 full YouTube tutorial / integration video",
      "3 Instagram Reels (hook → tutorial → results)",
      "1 dedicated newsletter feature",
      "2 LinkedIn posts (announcement + case study)",
      "10-day content series framing",
      "Full performance analytics report",
    ],
    featured: true,
  },
  {
    id: "trust",
    name: "TRUST SERIES",
    price: "Starting at $3,000",
    best: "Best for: Retainer partners, launch campaigns",
    items: [
      "Everything in Growth",
      "10-day series: 5 videos, real workflow documentation",
      "1 podcast / founder interview episode",
      "Community feature in She Creates weekly Q&A",
      "Co-created evergreen resource or template",
      "Monthly retainer option available",
    ],
    featured: false,
  },
];

const extras = [
  {
    title: "Add-Ons",
    rows: ["Podcast episode +$300", "Email sequence +$200", "Community shoutout +$150"],
  },
  {
    title: "Retainer",
    rows: ["3-month minimum", "From $1,000/mo", "2 pieces/month"],
  },
  {
    title: "What I Don't Do",
    rows: ["Products I haven't used", "Ad reads with no context", "Competing brand overlap"],
  },
];

export default function Packages() {
  return (
    <section
      id="packages"
      data-testid="packages-section"
      className="section-pad"
      style={{ background: "var(--cream)" }}
    >
      <div className="container-x">
        <p className="uppercase tracking-[0.18em] text-sm font-bold" style={{ color: "var(--pink)" }}>
          Partnership Tiers
        </p>
        <h2
          className="font-display mt-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          data-testid="packages-heading"
        >
          PICK YOUR DISTRIBUTION.
        </h2>
        <p className="mt-8 max-w-2xl" style={{ color: "#5A5A60", fontSize: "1.05rem", lineHeight: 1.7 }}>
          All tiers include authentic integration — not ad reads. I build your
          product into a real workflow so the audience sees the value, not just
          the name.
        </p>

        <div className="grid md:grid-cols-3 gap-7 mt-16">
          {tiers.map((t) => (
            <div
              key={t.id}
              data-testid={`tier-card-${t.id}`}
              className={`card-hover rounded-3xl p-8 relative flex flex-col bg-white`}
              style={{
                border: t.featured ? "2px solid var(--pink)" : "1px solid #EFE6DC",
                boxShadow: t.featured ? "0 30px 60px -30px rgba(236,27,92,0.35)" : "none",
              }}
            >
              {t.featured && (
                <span
                  className="absolute"
                  style={{
                    top: -14,
                    right: 24,
                    background: "var(--pink)",
                    color: "#fff",
                    padding: "6px 16px",
                    borderRadius: 9999,
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                  }}
                >
                  Most Popular
                </span>
              )}
              <h3 className="font-display" style={{ fontSize: "1.8rem", color: "var(--ink)" }}>
                {t.name}
              </h3>
              <p className="mt-4 font-bold text-lg" style={{ color: "var(--pink)" }}>
                {t.price}
              </p>
              <p className="mt-3 text-sm" style={{ color: "#6B6B72" }}>
                {t.best}
              </p>

              <ul className="mt-6 space-y-3 flex-1">
                {t.items.map((i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="check mt-0.5" />
                    <span className="text-sm" style={{ color: "#3A3A40", lineHeight: 1.55 }}>{i}</span>
                  </li>
                ))}
              </ul>

              <button
                data-testid={`tier-cta-${t.id}`}
                onClick={() => scrollTo("contact")}
                className={t.featured ? "btn-pink mt-8 justify-center" : "btn-outline mt-8 justify-center"}
                style={{ width: "100%", justifyContent: "center" }}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-7 mt-12">
          {extras.map((e) => (
            <div
              key={e.title}
              data-testid={`extras-${e.title.replace(/\s+/g, "-").toLowerCase()}`}
              className="card-hover rounded-2xl p-7 bg-white"
              style={{ border: "1px solid #EFE6DC" }}
            >
              <h4 className="font-bold text-lg">{e.title}</h4>
              <ul className="mt-4 space-y-2">
                {e.rows.map((r) => (
                  <li key={r} className="text-sm" style={{ color: "#5A5A60" }}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
