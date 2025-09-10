import clsx from "clsx";
import styles from "./Header.module.scss";

export const Header = () => {
	return (
		<div className={styles.wrapper}>
			<div className={clsx("container", styles.header)}>
				<h1 className={styles.header__title}>Posts</h1>
			</div>
		</div>
	);
};
