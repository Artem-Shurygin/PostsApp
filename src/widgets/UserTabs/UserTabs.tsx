import type { FC } from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./UserTabs.module.scss";

type Tabs = {
	id: number;
	title: string;
	link: string;
};

export const UserTabs: FC = () => {
	let { userId } = useParams();
	if (!userId) userId = "0";
	const tabs: Tabs[] = [
		{ id: 0, title: "Главная", link: "/" },
		{ id: 1, title: "Лента", link: "/posts" },
		{ id: 2, title: "Посты", link: `/users/${userId}/posts` },
		{ id: 3, title: "Альбомы", link: `/users/${userId}/albums` },
		{ id: 4, title: "Задачи", link: `/users/${userId}/todos` },
	];

	return (
		<nav className={styles.user_tabs}>
			{tabs.map((tab) => (
				<NavLink to={tab.link} className={styles.user_tabs__link} key={`tab-${tab.id}`}>
					{tab.title}
				</NavLink>
			))}
		</nav>
	);
};
