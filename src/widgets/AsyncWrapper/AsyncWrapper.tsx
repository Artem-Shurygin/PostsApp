import type { PropsWithChildren } from "react";
import styles from "./AsyncWrapper.module.scss";

type AsyncWrapperProps = {
	isLoading: boolean;
	error: unknown;
};

export const AsyncWrapper = ({ isLoading, error, children }: PropsWithChildren<AsyncWrapperProps>) => {
	if (isLoading) {
		return <p className={styles.loading_message}>Загрузка данных...</p>;
	}
	if (error) {
		let errorMessage = "Возникла ошибка при загрузке данных.";
		if (typeof error === "object") {
			if ("status" in error) {
				errorMessage = `Ошибка: ${error.status}`;
			} else if ("message" in error) {
				errorMessage = `Ошибка: ${error.message}`;
			}
		}
		return <p className={styles.error_message}>{errorMessage}</p>;
	}
	return <>{children}</>;
};
