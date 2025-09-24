import type { FC } from "react";
import styles from "./HomePage.module.scss";
import { ThemeWrapper } from "@/widgets/ThemeWrapper/ThemeWrapper";

export const HomePage: FC = () => {
	return (
		<ThemeWrapper>
			<ul className={styles.home__comments_list}>
				<li>Переход на страницу конкретного поста осуществляется по клику на заголовок данного поста.</li>
				<li>Переход на страницу альбома с фото осуществляется по клику на данный альбом в альбомах пользователя.</li>
			</ul>
		</ThemeWrapper>
	);
};
