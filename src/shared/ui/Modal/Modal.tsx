import type { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import { usePortal } from "./usePortal";
import styles from "./Modal.module.scss";
import { ModalHeader } from "@/shared/ui/Modal/Compound/ModalHeader/ModalHeader";
import { ModalBody } from "@/shared/ui/Modal/Compound/ModalBody/ModalBody";
import { ModalFooter } from "@/shared/ui/Modal/Compound/ModalFooter/ModalFooter";

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
};

type ModalComponents = {
	Header: FC<{ children: ReactNode }>;
	Body: FC<{ children: ReactNode }>;
	Footer: FC<{ children: ReactNode }>;
};

export const Modal: FC<ModalProps> & ModalComponents = ({ isOpen, onClose, children }) => {
	const portalElement = usePortal("root");
	const handleCloseButtonClick = () => onClose();

	if (!isOpen) return null;
	return createPortal(
		<div className={styles.modal}>
			<div className={styles.modal__content}>
				<button className={styles.modal__close} onClick={handleCloseButtonClick}>
					<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 50 50">
						<path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
					</svg>
				</button>
				{children}
			</div>
		</div>,
		portalElement
	);
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
