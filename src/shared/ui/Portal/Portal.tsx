import type { FC } from "react";
import { useCallback } from "react";
import styles from "./Portal.module.scss";

type PortalProps = {
	onClose: () => void;
};

const Portal: FC<PortalProps> = ({ onClose }) => {
	const handleCloseButtonClick = useCallback(() => {
		onClose();
	}, [onClose]);
	return (
		<div className={styles.modal}>
			<div className={styles.modal__content}>
				<button className={styles.modal__close} onClick={handleCloseButtonClick}>
					<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 50 50">
						<path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
					</svg>
				</button>
				<p className={styles.modal__title}>Project info</p>
				<p className={styles.modal__text}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, quidem esse dicta dolorem debitis quaerat ut
					incidunt, molestiae blanditiis corrupti voluptatum minus, ullam enim similique fugiat. Nemo distinctio
					voluptatum voluptatem itaque et quas! Facere itaque minima odit assumenda nulla, error temporibus, consequatur
					illo ea sed totam amet officiis, quia voluptatum? Tenetur, magni. Fuga blanditiis reiciendis veritatis magni
					consequatur magnam ipsa voluptatibus perferendis, dignissimos modi repellat quibusdam, facere alias nam
					placeat eius, exercitationem aperiam hic saepe? Placeat distinctio, natus reprehenderit eum nulla repellat id
					nostrum possimus provident, atque sunt, perspiciatis labore inventore adipisci vitae ex? Numquam nam officiis
					quia officia enim.
				</p>
			</div>
		</div>
	);
};

export default Portal;
