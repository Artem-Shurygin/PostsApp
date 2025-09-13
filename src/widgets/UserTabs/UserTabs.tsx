import type { FC } from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./UserTabs.module.scss";

export const UserTabs: FC = () => {
	let { id } = useParams();
	if (!id) id = "0";

	return (
		<nav className={styles.user_tabs}>
			<NavLink to="/" className={styles.user_tabs__link}>
				Главная
			</NavLink>
			<NavLink to="/posts" className={styles.user_tabs__link}>
				Лента
			</NavLink>
			<NavLink to={`/users/${id}/posts`} className={styles.user_tabs__link}>
				Посты
			</NavLink>
			<NavLink to={`/users/${id}/albums`} className={styles.user_tabs__link}>
				Альбомы
			</NavLink>
			<NavLink to={`/users/${id}/todos`} className={styles.user_tabs__link}>
				Задачи
			</NavLink>
		</nav>
	);
};
