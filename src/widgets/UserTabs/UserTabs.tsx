import { NavLink } from "react-router-dom";
import styles from "./UserTabs.module.scss";
import { useUser } from "@/shared/lib/user/useUser";

type Tab = {
	id: number;
	title: string;
	link: string;
};

export const UserTabs = () => {
	const { user } = useUser();

	const tabs: Tab[] = [
		{ id: 0, title: "Главная", link: "/" },
		{ id: 1, title: "Лента", link: "/posts" },
		{ id: 2, title: "Посты", link: `/users/${user?.id}/posts` },
		{ id: 3, title: "Альбомы", link: `/users/${user?.id}/albums` },
		{ id: 4, title: "Задачи", link: `/users/${user?.id}/todos` },
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
