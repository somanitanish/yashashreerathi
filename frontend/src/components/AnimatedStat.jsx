import React from "react";
import useCountUp from "@/hooks/useCountUp";

/**
 * AnimatedStat - count-up number with formatting + suffix
 * Props: value (number), suffix (string), format ('comma' | 'k')
 */
export default function AnimatedStat({ value, suffix = "+", format = "comma", className = "", style = {}, testId }) {
  const [ref, n] = useCountUp(value, 1600);

  let display;
  if (format === "k") {
    display = n >= 1000 ? `${Math.floor(n / 1000)}K` : `${n}`;
  } else {
    display = n.toLocaleString("en-US");
  }

  return (
    <span ref={ref} data-testid={testId} className={className} style={style}>
      {display}
      {suffix}
    </span>
  );
}
