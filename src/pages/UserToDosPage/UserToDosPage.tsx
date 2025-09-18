import type { FC } from "react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./UserToDosPage.module.scss";
import { useTheme } from "@/shared/lib/theme/useTheme";
import { useUser } from "@/shared/lib/user/useUser";

type ToDoList = {
	id: number;
	task: string;
	completed: boolean;
	priority: string;
	category: string;
};

export const UserToDosPage: FC = () => {
	const { theme } = useTheme();
	const { user } = useUser();
	const [userToDoList, setUserToDoList] = useState<ToDoList[]>([]);

	//Получение списка задач пользователя
	useEffect(() => {
		if (user) setUserToDoList(user.toDoList);
	}, [user]);

	return (
		<div className={`theme_outer_wrapper__${theme}`}>
			<div className={clsx("container", `theme_inner_wrapper__${theme}`)}>
				<h2 className={styles.user_todos__title}>Задачи пользователя "{user?.userName}"</h2>
				<ul className={styles.user_todos__list}>
					{userToDoList?.map((task) => (
						<li key={`toDo-${task.id}`}>{task.task}</li>
					))}
				</ul>
			</div>
		</div>
	);
};
