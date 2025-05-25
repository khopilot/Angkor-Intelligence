'use client';

import { useEffect, useState } from 'react';

interface StatsCounterProps {
  value: number;
  label: string;
  duration?: number;
}

export default function StatsCounter({ value, label, duration = 2000 }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${label}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (!isVisible) return;

    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= value) {
          clearInterval(timer);
          return value;
        }
        return next;
      });
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <div id={`counter-${label}`} className="text-center">
      <div className="text-4xl font-bold text-primary mb-2">
        {Math.round(count).toLocaleString()}
      </div>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
}