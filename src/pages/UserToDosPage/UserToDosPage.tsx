import type { FC } from "react";
import styles from "./UserToDosPage.module.scss";
import { useUser } from "@/shared/lib/user/useUser";
import { useGetToDosByUserIdQuery, type ToDo } from "@/entities/toDos/api/toDosApi";
import { AsyncWrapper } from "@/widgets/AsyncWrapper/AsyncWrapper";
import { ThemeWrapper } from "@/widgets/ThemeWrapper/ThemeWrapper";
import { ToDoItem } from "@/entities/toDos/ui/ToDoItem/ToDoItem";

export const UserToDosPage: FC = () => {
	const { user } = useUser();
	const { data: toDos, isLoading, error } = useGetToDosByUserIdQuery(Number(user?.id));
	return (
		<ThemeWrapper>
			<AsyncWrapper isLoading={isLoading} error={error}>
				<h2 className={styles.user_todos__title}>Задачи пользователя "{user?.username}"</h2>
				<div className={styles.user_todos__list}>
					{toDos?.map((toDo: ToDo) => (
						<ToDoItem toDo={toDo} />
					))}
				</div>
			</AsyncWrapper>
		</ThemeWrapper>
	);
};
