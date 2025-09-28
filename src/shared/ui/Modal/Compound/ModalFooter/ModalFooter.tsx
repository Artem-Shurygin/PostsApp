import type { PropsWithChildren } from "react";
import styles from "./ModalFooter.module.scss";

export const ModalFooter = ({ children }: PropsWithChildren) => {
	return <div className={styles.modal_footer}>{children}</div>;
};
