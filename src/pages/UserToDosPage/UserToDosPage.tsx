import type { FC } from "react";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import styles from "./UserToDosPage.module.scss";
import { useTheme } from "@/shared/lib/theme/useTheme";
import { testDataUsers } from "@/shared/mocks/testDataUsers";

export const UserToDosPage: FC = () => {
	const { theme } = useTheme();
	const { userId } = useParams();

	//Получение списка задач пользователя
	const users = testDataUsers;
	const currentUser = useMemo(() => users.find((user) => user.id == Number(userId)), []);
	const userToDoList = currentUser?.toDoList;

	return (
		<div className={`theme_outer_wrapper__${theme}`}>
			<div className={clsx("container", `theme_inner_wrapper__${theme}`)}>
				<h2 className={styles.user_todos__title}>Ваши задачи</h2>
				<ul className={styles.user_todos__list}>
					{userToDoList?.map((task) => (
						<li key={`toDo-${task.id}`}>{task.task}</li>
					))}
				</ul>
			</div>
		</div>
	);
};
