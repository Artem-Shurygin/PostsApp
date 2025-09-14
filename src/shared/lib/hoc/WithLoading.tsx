import { useState, useEffect } from "react";
import type { ComponentType } from "react";
import styles from "./WithLoading.module.scss";
import clsx from "clsx";
import { useTheme } from "../theme/useTheme";

type ComponentWithLoadingProps = ComponentType<{
	isLoading?: boolean;
}>;

export const withLoading = <Props extends object>(WrappedComponent: ComponentWithLoadingProps) => {
	return function WithLoadingComponent(...props: Props[]) {
		const { theme } = useTheme();
		const [isLoading, setIsLoading] = useState(true);
		useEffect(() => {
			// Имитация загрузки данных
			const timer = setTimeout(() => {
				setIsLoading(false);
			}, 2000);
			return () => clearTimeout(timer);
		}, []);

		if (isLoading) {
			return (
				<div className={`theme_outer_wrapper__${theme}`}>
					<div className={clsx("container", `theme_inner_wrapper__${theme}`, styles.albums)}>
						<p className={styles.loading}>Загрузка данных...</p>
					</div>
				</div>
			);
		}
		return <WrappedComponent {...props} isLoading={isLoading} />;
	};
};
