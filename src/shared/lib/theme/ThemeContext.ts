import { createContext } from "react";

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; setTheme: (theme: Theme) => void };

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);
