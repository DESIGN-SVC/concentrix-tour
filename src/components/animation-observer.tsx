"use client";
import { useEffect } from "react";

export const AnimationObserver = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-animation]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animation");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
};
