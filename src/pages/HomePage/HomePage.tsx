import type { FC } from "react";
import clsx from "clsx";
import styles from "./HomePage.module.scss";
import { useTheme } from "@/shared/lib/theme/useTheme";

export const HomePage: FC = () => {
	const { theme } = useTheme();
	return (
		<div className={`theme_outer_wrapper__${theme}`}>
			<div className={clsx("container", `theme_inner_wrapper__${theme}`)}>
				<ul className={styles.home__comments_list}>
					<li>Переход на страницу конкретного поста осуществляется по клику на заголовок данного поста.</li>
					<li>
						Представлены посты, альбомы и задачи пользователя с id=0. Для перехода на другого пользователя нужно
						изменить id в url.
					</li>
				</ul>
			</div>
		</div>
	);
};
