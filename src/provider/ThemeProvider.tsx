"use client";
import React, { useEffect } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    var theme = localStorage.getItem("color-theme");
    if (theme) {
      document.documentElement.classList.add(theme);
    }
  }, []);

  return <div>{children}</div>;
}
