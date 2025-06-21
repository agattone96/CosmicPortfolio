
// components/ThemeToggle.jsx
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.className = theme + "-theme";
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button className="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;
