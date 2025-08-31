import React, { useState } from "react";
import {useTheme} from "@/shared/lib/theme/useTheme";

type Theme = "light" | "dark";

export const ThemeProvider = ({ children }: any) => {
	const [theme, setTheme] = useState<Theme>("dark");
	return <useTheme.Provider value={{ theme, setTheme }}>{children}</useTheme.Provider>;
};
