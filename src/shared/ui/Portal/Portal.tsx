import type { FC } from "react";
import { createPortal } from "react-dom";
import Modal from "@/shared/ui/Modal/Modal";

type PortalProps = {
	isOpen: boolean;
	onClose: () => void;
};

const Portal: FC<PortalProps> = ({ isOpen, onClose }) => {
	let rootEl = document.querySelector("#root");
	if (!rootEl) rootEl = document.body;

	if (!isOpen) return null;
	return createPortal(<Modal onClose={onClose} />, rootEl);
};

export default Portal;
