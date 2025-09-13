import type { FC } from "react";
import clsx from "clsx";
import { useTheme } from "@/shared/lib/theme/useTheme";


export const HomePage: FC = () => {
	const { theme } = useTheme();
	return (
		<div className={`theme_outer_wrapper__${theme}`}>
			<div className={clsx("container", `theme_inner_wrapper__${theme}`)}>
				<p>Главная</p>
			</div>
		</div>
	);
};
