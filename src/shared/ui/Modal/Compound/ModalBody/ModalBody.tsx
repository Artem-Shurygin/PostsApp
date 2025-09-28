import type { PropsWithChildren } from "react";
import styles from "./ModalBody.module.scss";

export const ModalBody = ({ children }: PropsWithChildren) => {
	return <div className={styles.modal_body}>{children}</div>;
};
