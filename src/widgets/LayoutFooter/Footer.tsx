import clsx from "clsx";
import styles from "./Footer.module.scss";

export const Footer = () => {
	return (
		<div className={styles.wrapper}>
			<div className={clsx("container", styles.footer)}>
				<small className={styles.footer__copyright}>&copy; 2025 Все права защищены.</small>
			</div>
		</div>
	);
};
