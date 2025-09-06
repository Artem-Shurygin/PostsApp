import type { FC } from "react";
import { createPortal } from "react-dom";
import Portal from "@/shared/ui/Portal/Portal";

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
	let rootEl = document.querySelector("#root");
	if (!rootEl) rootEl = document.body;

	if (!isOpen) return null;
	return createPortal(<Portal onClose={onClose} />, rootEl);
};

export default Modal;
