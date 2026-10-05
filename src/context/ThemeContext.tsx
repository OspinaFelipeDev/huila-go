import { createContext, useContext, useEffect, useState, type ReactNode, } from "react";

type Theme = "dark" | "light";

const themes = {
  dark: {
  "--bg-primary": "#101814",
  "--bg-secondary": "#16231b",
  "--bg-tertiary": "#1d2d22",
  "--border": "#304538",
  "--text-primary": "#f2f4ed",
  "--text-secondary": "#c5cec3",
  "--text-muted": "#96a49a",
  "--accent": "#a4c957",
  "--accent-dark": "#101814",
  "--danger": "#fca5a5",
},

  light: {
    "--bg-primary": "#f4f7f2",
    "--bg-secondary": "#ffffff",
    "--bg-tertiary": "#e8f0df",
    "--border": "#d4ddca",
    "--text-primary": "#172033",
    "--text-secondary": "#475569",
    "--text-muted": "#64748b",
    "--accent": "#6f9f24",
    "--accent-dark": "#ffffff",
    "--danger": "#dc2626",
  },
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return "dark";
});
  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  useEffect(() => {
  const root = document.documentElement;
  const selectedTheme = themes[theme];

  Object.entries(selectedTheme).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });

  localStorage.setItem("theme", theme);
}, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme debe utilizarse dentro de ThemeProvider");
  }

  return context;
}