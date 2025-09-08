import React from "react";

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; setTheme: (theme: Theme) => void };
export const ThemeContext = React.createContext<ThemeContext>({} as ThemeContext);
