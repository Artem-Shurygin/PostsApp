import type { PropsWithChildren } from "react";
import { useState } from "react";
import { ThemeContext } from "@/shared/lib/theme/ThemeContext";

type Theme = "light" | "dark";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
	const [theme, setTheme] = useState<Theme>("dark");
	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
