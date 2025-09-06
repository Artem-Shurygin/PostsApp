import { useContext } from "react";
import ThemeContext from "@/shared/lib/theme/ThemeContext";

export const useTheme = () => {
	const context = useContext(ThemeContext);

	if (context === undefined) {
		throw new Error("useContext === undefined");
	}

	return context;
};
