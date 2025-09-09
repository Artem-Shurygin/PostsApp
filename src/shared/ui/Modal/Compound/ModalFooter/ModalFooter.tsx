import type { FC, ReactNode } from "react";
import styles from "./ModalFooter.module.scss";

type ModalFooterProps = {
	children: ReactNode;
};

export const ModalFooter: FC<ModalFooterProps> = ({ children }) => {
	return <div className={styles.modal_footer}>{children}</div>
};
