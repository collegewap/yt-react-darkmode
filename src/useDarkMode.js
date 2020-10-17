import { useEffect, useState } from "react";

export default () => {
  const [isDark, setIsDark] = useState(() => {
    try {
      const item = window.localStorage.getItem("isDarkMode");
      return item ? JSON.parse(item) : undefined;
    } catch (e) {
      return false;
    }
  });

  const isDarkModeEnabled =
    typeof isDark !== "undefined"
      ? isDark
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  useEffect(() => {
    if (isDarkModeEnabled) {
      window.document.body.classList.add("dark");
    } else {
      window.document.body.classList.remove("dark");
    }
    try {
      window.localStorage.setItem("isDarkMode", isDarkModeEnabled);
    } catch (e) {
      console.error("Unable to access local storage");
    }
  }, [isDarkModeEnabled]);
  return [isDarkModeEnabled, setIsDark];
};
