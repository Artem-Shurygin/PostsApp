import type { PropsWithChildren } from "react";
import { clsx } from "clsx";
import { useTheme } from "@/shared/lib/theme/useTheme";

type ThemeWrapperProps = {
	outerStyles?: string[];
	innerStyles?: string[];
};

export const ThemeWrapper = ({ innerStyles, outerStyles, children }: PropsWithChildren<ThemeWrapperProps>) => {
	const { theme } = useTheme();
	return (
		<div className={clsx(`theme_outer_wrapper__${theme}`, ...(outerStyles || []))}>
			<div className={clsx("container", `theme_inner_wrapper__${theme}`, ...(innerStyles || []))}>{children}</div>
		</div>
	);
};
