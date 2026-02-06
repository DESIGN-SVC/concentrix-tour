"use client";

import { Footer, Header, LoaderOverlay } from "@/components";
import { cx } from "cva";
import { Suspense, useEffect, useState } from "react";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>("light");
  const [mounted, setMounted] = useState(false);

  console.log(theme);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  if (!mounted) {
    return <LoaderOverlay />;
  }

  return (
    <div className={cx(["flex flex-col relative", "w-full min-h-lvh"])}>
      <Suspense fallback={<LoaderOverlay />}>
        <Header />
        {children}
        <Footer />
      </Suspense>
    </div>
  );
}
