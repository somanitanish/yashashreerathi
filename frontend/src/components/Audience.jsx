import React from "react";
import { Rocket, Wrench, Globe2, TrendingUp } from "lucide-react";

const personas = [
  {
    Icon: Rocket,
    title: "The Ambitious Creator",
    body: "18–34. Learning to monetise. Wants AI tools that save real time. Will pay for products that work.",
  },
  {
    Icon: Wrench,
    title: "The Solo Founder / Indie Builder",
    body: "Building something. Actively researching productivity and AI stacks. Highly convertible.",
  },
  {
    Icon: Globe2,
    title: "The International Professional",
    body: "Immigrant or expat in US, UK, or Ireland. Career-focused. Highly engaged because they see themselves in my story.",
  },
  {
    Icon: TrendingUp,
    title: "The Learner Going Pro",
    body: "Corporate professional pivoting to creator economy. Follows my build-in-public journey as a roadmap. High trust, high intent.",
  },
];

const platforms = [
  { name: "Instagram", value: "25,000+", pct: 92 },
  { name: "LinkedIn", value: "950+", pct: 38 },
  { name: "YouTube", value: "800+", pct: 30 },
  { name: "Newsletter", value: "300+", pct: 15 },
];

const countries = [
  { code: "US", label: "USA" },
  { code: "IE", label: "Ireland" },
  { code: "GB", label: "UK" },
  { code: "IN", label: "India" },
];

export default function Audience() {
  return (
    <section
      id="audience"
      data-testid="audience-section"
      className="section-pad"
      style={{ background: "var(--ink)", color: "#fff" }}
    >
      <div className="container-x">
        <p
          className="uppercase tracking-[0.18em] text-sm font-bold"
          style={{ color: "var(--yellow)" }}
          data-testid="audience-eyebrow"
        >
          Who's Listening
        </p>
        <h2
          className="font-display mt-5 md:mt-6"
          style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
          data-testid="audience-heading"
        >
          YOUR NEXT POWER USERS.
        </h2>
        <p className="mt-6 md:mt-8 max-w-2xl text-sm md:text-base" style={{ color: "#B9B9C0", lineHeight: 1.7 }}>
          My audience are small content creators &amp; biz. They doesn't consume
          passively. They screenshot, save, share, and act.
        </p>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16">
          {/* Persona cards */}
          <div className="flex flex-col gap-4 md:gap-5">
            {personas.map(({ Icon, title, body }) => (
              <div
                key={title}
                data-testid={`persona-${title.replace(/[^a-z]/gi, "-").toLowerCase()}`}
                className="card-hover rounded-2xl p-5 md:p-6 flex gap-4 md:gap-5 items-start"
                style={{ background: "#1A1A1D", border: "1px solid #26262A" }}
              >
                <div
                  className="flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ width: 48, height: 48, background: "var(--yellow)" }}
                >
                  <Icon size={24} color="#0E0E10" strokeWidth={2.2} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-xs md:text-sm" style={{ color: "#A8A8B0", lineHeight: 1.6 }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Platform distribution */}
          <div className="flex flex-col gap-5 md:gap-6">
            <div
              data-testid="platform-distribution-card"
              className="rounded-3xl p-6 md:p-8"
              style={{ background: "#fff", color: "var(--ink)" }}
            >
              <h3 className="text-base md:text-lg font-bold">Platform Distribution</h3>
              <div className="mt-5 md:mt-6 space-y-5 md:space-y-7">
                {platforms.map((p) => (
                  <div key={p.name}>
                    <div className="flex justify-between items-baseline">
                      <span className="font-medium text-sm md:text-base">{p.name}</span>
                      <span className="font-display" style={{ color: "var(--pink)", fontSize: "clamp(1.1rem, 2.4vw, 1.4rem)" }}>
                        {p.value}
                      </span>
                    </div>
                    <div className="bar-track mt-2 md:mt-3">
                      <div className="bar-fill" style={{ width: `${p.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 md:gap-3">
              {countries.map((c) => (
                <div
                  key={c.code}
                  data-testid={`country-${c.code.toLowerCase()}`}
                  className="rounded-2xl py-4 md:py-5 text-center"
                  style={{ background: "#1A1A1D", border: "1px solid #26262A" }}
                >
                  <p className="font-display" style={{ fontSize: "clamp(1.1rem, 3vw, 1.6rem)", color: "#3A3A40" }}>
                    {c.code}
                  </p>
                  <p className="mt-1 text-[0.65rem] md:text-xs" style={{ color: "#A8A8B0" }}>
                    {c.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
