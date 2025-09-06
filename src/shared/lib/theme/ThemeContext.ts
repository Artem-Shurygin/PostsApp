import React from "react";

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; setTheme: (theme: Theme) => void };
const ThemeContext = React.createContext<ThemeContext>({} as ThemeContext);

export default ThemeContext;
