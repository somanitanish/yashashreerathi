import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [building, setBuilding] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !building.trim()) return;

    const subject = `Partnership Inquiry — ${name.trim()}`;
    const body = [
      `Hi Yashashree,`,
      ``,
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      ``,
      `What I'm building:`,
      building.trim(),
      ``,
      `Looking forward to chatting.`,
    ].join("\n");

    const href = `mailto:yashashreerathi@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    borderRadius: 14,
    padding: "12px 16px",
    width: "100%",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 200ms ease, background 200ms ease",
  };

  const onFocus = (e) => {
    e.target.style.borderColor = "var(--pink)";
    e.target.style.background = "rgba(236,27,92,0.06)";
  };
  const onBlur = (e) => {
    e.target.style.borderColor = "rgba(255,255,255,0.1)";
    e.target.style.background = "rgba(255,255,255,0.04)";
  };

  return (
    <form
      data-testid="lead-form"
      onSubmit={onSubmit}
      className="rounded-3xl p-6 md:p-8 mx-auto max-w-2xl text-left"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div className="flex items-center justify-between gap-4 mb-5 md:mb-6">
        <div>
          <p
            className="uppercase tracking-[0.18em] font-bold text-xs"
            style={{ color: "var(--pink)" }}
          >
            Quick Pitch
          </p>
          <p className="mt-1 text-sm md:text-base" style={{ color: "#D8D8DE" }}>
            Send a 30-second intro, get a reply in 24–48h.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
        <input
          data-testid="lead-name"
          type="text"
          required
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <input
          data-testid="lead-email"
          type="email"
          required
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
      <textarea
        data-testid="lead-message"
        required
        placeholder="What are you building?"
        rows={3}
        value={building}
        onChange={(e) => setBuilding(e.target.value)}
        style={{ ...inputStyle, marginTop: 12, resize: "vertical", minHeight: 90 }}
        onFocus={onFocus}
        onBlur={onBlur}
      />

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-5 md:mt-6">
        <p className="text-xs" style={{ color: "#8A8A92" }}>
          Opens your email app with details pre-filled.
        </p>
        <button
          data-testid="lead-submit"
          type="submit"
          className="btn-pink justify-center"
          style={{ minWidth: 180, justifyContent: "center" }}
        >
          {sent ? (
            <>
              <CheckCircle2 size={18} /> Opening mail…
            </>
          ) : (
            <>
              Send Pitch <Send size={16} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
