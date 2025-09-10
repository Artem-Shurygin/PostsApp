import type { FC, ReactNode } from "react";
import { useState } from "react";
import { ThemeContext } from "@/shared/lib/theme/ThemeContext";

type ThemeProviderProps = {
	children: ReactNode;
};
type Theme = "light" | "dark";

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>("dark");
	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
