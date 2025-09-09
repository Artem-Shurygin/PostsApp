import type { FC, ReactNode } from "react";
import styles from "./ModalBody.module.scss";

type ModalBodyProps = {
	children: ReactNode;
};

export const ModalBody: FC<ModalBodyProps> = ({ children }) => {
	return <div className={styles.modal_body}>{children}</div>;
};
