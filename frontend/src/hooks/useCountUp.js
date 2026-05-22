import { useEffect, useRef, useState } from "react";

/**
 * useCountUp - animate from 0 to target when element enters viewport
 * @param {number} target - final number
 * @param {number} duration - ms
 */
export default function useCountUp(target, duration = 1600) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min(1, (now - start) / duration);
              // easeOutCubic
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.floor(eased * target));
              if (p < 1) requestAnimationFrame(tick);
              else setValue(target);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return [ref, value];
}
