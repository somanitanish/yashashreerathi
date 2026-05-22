import React from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "why", label: "Why Me" },
  { id: "audience", label: "Audience" },
  { id: "packages", label: "Packages" },
  { id: "contact", label: "Contact" },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Header({ active }) {
  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-50 w-full backdrop-blur-md"
      style={{ background: "rgba(251,246,241,0.85)", borderBottom: "1px solid #EDE3D8" }}
    >
      <div className="container-x flex items-center justify-between py-5">
        <button
          data-testid="logo-button"
          onClick={() => scrollTo("home")}
          className="font-display tracking-tight"
          style={{ fontSize: "1.5rem", color: "var(--ink)" }}
        >
          YASHASHREE
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((n) => (
            <button
              key={n.id}
              data-testid={`nav-${n.id}`}
              onClick={() => scrollTo(n.id)}
              className={`nav-link ${active === n.id ? "active" : ""}`}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <button
          data-testid="header-cta"
          onClick={() => scrollTo("contact")}
          className="btn-pink"
          style={{ padding: "12px 26px", fontSize: "0.95rem" }}
        >
          Get in Touch
        </button>
      </div>
    </header>
  );
}
