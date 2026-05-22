import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (id) => {
    setOpen(false);
    // Wait a tick so the drawer closes & body unlocks before scroll
    setTimeout(() => scrollTo(id), 80);
  };

  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-50 w-full backdrop-blur-md"
      style={{ background: "rgba(251,246,241,0.9)", borderBottom: "1px solid #EDE3D8" }}
    >
      <div className="container-x flex items-center justify-between py-4 md:py-5 gap-4">
        <button
          data-testid="logo-button"
          onClick={() => handleNav("home")}
          className="font-display tracking-tight shrink-0"
          style={{ fontSize: "clamp(1.15rem, 2.4vw, 1.5rem)", color: "var(--ink)" }}
        >
          YASHASHREE
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navItems.map((n) => (
            <button
              key={n.id}
              data-testid={`nav-${n.id}`}
              onClick={() => handleNav(n.id)}
              className={`nav-link text-sm xl:text-base ${active === n.id ? "active" : ""}`}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            data-testid="header-cta"
            onClick={() => handleNav("contact")}
            className="btn-pink hidden sm:inline-flex"
            style={{ padding: "10px 22px", fontSize: "0.9rem" }}
          >
            Get in Touch
          </button>

          {/* Mobile menu toggle */}
          <button
            data-testid="mobile-menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center rounded-full"
            style={{
              width: 44,
              height: 44,
              background: open ? "var(--ink)" : "transparent",
              color: open ? "#fff" : "var(--ink)",
              border: open ? "1px solid var(--ink)" : "1px solid #E5DED6",
              transition: "all 200ms ease",
            }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        data-testid="mobile-drawer"
        className="lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out"
        style={{
          maxHeight: open ? "560px" : "0px",
          opacity: open ? 1 : 0,
          background: "rgba(251,246,241,0.98)",
          borderBottom: open ? "1px solid #EDE3D8" : "1px solid transparent",
        }}
      >
        <nav className="container-x flex flex-col py-4 gap-1">
          {navItems.map((n) => (
            <button
              key={n.id}
              data-testid={`mnav-${n.id}`}
              onClick={() => handleNav(n.id)}
              className="text-left py-3 px-2 font-medium border-b last:border-b-0 transition-colors"
              style={{
                color: active === n.id ? "var(--pink)" : "#2A2A2E",
                borderColor: "#EDE3D8",
                fontSize: "1.05rem",
              }}
            >
              {n.label}
            </button>
          ))}
          <button
            data-testid="mobile-cta"
            onClick={() => handleNav("contact")}
            className="btn-pink mt-4 justify-center sm:hidden"
            style={{ width: "100%", padding: "14px 22px" }}
          >
            Get in Touch
          </button>
        </nav>
      </div>
    </header>
  );
}
