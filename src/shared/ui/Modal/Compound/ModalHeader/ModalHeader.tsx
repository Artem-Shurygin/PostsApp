import type { FC, ReactNode } from "react";
import styles from "./ModalHeader.module.scss";

type ModalHeaderProps = {
	children: ReactNode;
};

export const ModalHeader: FC<ModalHeaderProps> = ({ children }) => {
	return <div className={styles.modal_header}>{children}</div>;
};
