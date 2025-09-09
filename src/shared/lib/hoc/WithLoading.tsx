import { useState, useEffect } from "react";
import type { ComponentType } from "react";
import styles from "./WithLoading.module.scss";

type ComponentWithLoadingProps = ComponentType<{
	isLoading?: boolean;
}>;

export const withLoading = <Props extends object>(WrappedComponent: ComponentWithLoadingProps) => {
	return function WithLoadingComponent(...props: Props[]) {
		const [isLoading, setIsLoading] = useState(true);
		useEffect(() => {
			// Имитация загрузки данных
			const timer = setTimeout(() => {
				setIsLoading(false);
			}, 2000);
			return () => clearTimeout(timer);
		}, []);

		if (isLoading) {
			return <div className={styles.loading}>Загрузка данных...</div>;
		}
		return <WrappedComponent {...props} isLoading={isLoading} />;
	};
};
