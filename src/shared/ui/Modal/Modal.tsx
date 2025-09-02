import styles from "./Modal.module.scss";
import { type PropsWithChildren } from "react";
import ReactDOM from "react-dom";
type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

function Modal({ isOpen, onClose, children}: PropsWithChildren<ModalProps>) {
	let rootEl = document.querySelector("#root");
	if (!rootEl) rootEl = document.body;

	if (!isOpen) return null;
	return ReactDOM.createPortal(
		<div className={styles.modal}>
			<div className={styles.modal__content}>
				<button className={styles.modal__close} onClick={onClose}>
					<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 50 50">
						<path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
					</svg>
				</button>
				{children}
			</div>
		</div>,
		rootEl
	);
}

export default Modal;

//не работает(Uncaught TypeError: Cannot read properties of undefined (reading 'constructor'))
// export default CSSModules(Modal, styles, { allowMultiple: true });
