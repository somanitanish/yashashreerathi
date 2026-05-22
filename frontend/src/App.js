import { useEffect, useState } from "react";
import "@/App.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyMe from "@/components/WhyMe";
import Audience from "@/components/Audience";
import Packages from "@/components/Packages";
import Contact from "@/components/Contact";

function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = ["home", "why", "audience", "packages", "contact"];
    const observers = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="App font-body" data-testid="app-root">
      <Header active={active} />
      <main>
        <Hero />
        <WhyMe />
        <Audience />
        <Packages />
        <Contact />
      </main>
    </div>
  );
}

export default App;
