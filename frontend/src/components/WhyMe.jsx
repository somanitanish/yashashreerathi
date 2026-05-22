import React from "react";

const cards = [
  {
    n: "01",
    title: "The Positioning",
    accent: "I'm the first user. Not the last billboard.",
    body:
      "I test your tool before I recommend it. My audience knows I only feature things I've used in my workflow. That credibility is the asset — not my follower count.",
  },
  {
    n: "02",
    title: "The Audience",
    accent: "Curious, action-oriented, tool-hungry.",
    body:
      "My audience is early-adopter adjacent. Founders, creators, and ambitious professionals actively looking for tools that give them an unfair edge.",
  },
  {
    n: "03",
    title: "The Format",
    accent: "Educational integration. Not a 30-second ad read.",
    body:
      "Every brand integration is built into a learning moment. Tutorial-first. Storytelling-led. The product earns its place — which means the audience actually watches it.",
  },
];

const tags = [
  "Opinion over information",
  "Build in public",
  "AI workflows",
  "Creator systems",
  "Beginner onboarding",
  "Long-form discoverability",
  "Niche authority",
  "Founder-audience bridge",
];

export default function WhyMe() {
  return (
    <section
      id="why"
      data-testid="why-section"
      className="section-pad"
      style={{ background: "#FBE9E5" }}
    >
      <div className="container-x">
        <p
          className="uppercase tracking-[0.18em] text-sm font-bold"
          style={{ color: "var(--pink)" }}
          data-testid="why-eyebrow"
        >
          Why I'm Different
        </p>
        <h2
          className="font-display mt-5 md:mt-6"
          style={{ fontSize: "clamp(1.8rem, 7vw, 5rem)" }}
          data-testid="why-heading"
        >
          CREATOR OPERATOR.
          <br />
          NOT JUST CONTENT.
        </h2>
        <p
          className="mt-6 md:mt-8 max-w-2xl text-sm md:text-base"
          style={{ color: "#4F4F55", lineHeight: 1.7 }}
        >
          Most creators post about products. I integrate them into live workflows,
          document real outcomes, and teach my audience how to actually use them
          — which means your product gets discovered AND adopted.
        </p>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mt-12 md:mt-16">
          {cards.map((c) => (
            <div
              key={c.n}
              data-testid={`why-card-${c.n}`}
              className="card-hover bg-white rounded-2xl p-6 md:p-8 relative overflow-hidden"
              style={{ border: "1px solid #F0DAD3", borderTop: "3px solid var(--pink)" }}
            >
              <span
                className="font-display absolute right-6 top-6 select-none"
                style={{ fontSize: "3.4rem", color: "#F1DAD3" }}
              >
                {c.n}
              </span>
              <h3 className="text-xl font-bold" style={{ color: "var(--ink)" }}>
                {c.title}
              </h3>
              <p className="mt-4 font-semibold" style={{ color: "var(--pink)", fontSize: "1rem" }}>
                {c.accent}
              </p>
              <p className="mt-4 text-sm" style={{ color: "#5A5A60", lineHeight: 1.65 }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>

        {/* Quote band */}
        <div
          data-testid="quote-band"
          className="rounded-3xl mt-14 md:mt-20 px-6 md:px-10 py-10 md:py-16 text-center"
          style={{ background: "var(--ink)", color: "#fff" }}
        >
          <p
            className="font-display"
            style={{ fontSize: "clamp(1.1rem, 3.2vw, 2.3rem)", lineHeight: 1.3 }}
          >
            "I'M NOT HERE TO <span style={{ color: "var(--pink)" }}>HYPE</span> YOUR PRODUCT.
            I'M HERE TO MAKE YOUR <span style={{ color: "var(--pink)" }}>IDEAL USER</span> TRUST IT."
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-8 md:mt-12 max-w-4xl mx-auto">
          {tags.map((t) => (
            <span key={t} className="tag-pill" data-testid={`tag-${t.replace(/\s+/g, "-").toLowerCase()}`}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
