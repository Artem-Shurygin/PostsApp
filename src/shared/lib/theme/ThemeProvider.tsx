import type { FC, ReactNode } from "react";
import { useState } from "react";
import { useTheme } from "@/shared/lib/theme/useTheme";

type ThemeProviderProps = {
	children: ReactNode;
};
type Theme = "light" | "dark";

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>("dark");
	return <useTheme.Provider value={{ theme, setTheme }}>{children}</useTheme.Provider>;
};
