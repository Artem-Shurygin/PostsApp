import { useContext } from "react";
import ThemeContext from "@/shared/lib/theme/themeContext";

export const useTheme = () => {
	const context = useContext(ThemeContext);

	if (context === undefined) {
		console.log("useThemeContext error");
	}

	return context;
};
