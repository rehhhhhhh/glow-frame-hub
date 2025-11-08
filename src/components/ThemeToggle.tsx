import { useEffect } from "react";

export default function ThemeToggle() {
  useEffect(() => {
    // Set default theme to dark and ensure it stays dark
    const root = document.documentElement;
    root.classList.remove("light");
    localStorage.setItem("theme", "dark");
  }, []);

  return null; // Component doesn't render anything
}
