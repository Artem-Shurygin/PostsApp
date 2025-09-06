import { useTheme } from "@/shared/lib/theme/useTheme";
import clsx from "clsx";
import styles from "./Footer.module.scss";

const Header = () => {
	const { theme } = useTheme();
	return (
		<div className={clsx(theme === "dark" && styles.wrapper__dark_theme)}>
			<div className={clsx("container", styles.footer)}>
				<small className={styles.footer__copyright}>&copy; 2025 Все права защищены.</small>
			</div>
		</div>
	);
};

export default Header;
