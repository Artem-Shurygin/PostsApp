import type { PropsWithChildren } from "react";
import styles from "./ModalHeader.module.scss";

export const ModalHeader = ({ children }: PropsWithChildren) => {
	return <div className={styles.modal_header}>{children}</div>;
};
