import type { FC } from "react";
import styles from "./UserToDosPage.module.scss";
import { useUser } from "@/shared/lib/user/useUser";
import { useGetToDosByUserIdQuery, type ToDo } from "@/entities/toDos/api/toDosApi";
import { AsyncWrapper } from "@/widgets/AsyncWrapper/AsyncWrapper";
import { ThemeWrapper } from "@/widgets/ThemeWrapper/ThemeWrapper";

export const UserToDosPage: FC = () => {
	const { user } = useUser();
	const { data: toDos, isLoading, error } = useGetToDosByUserIdQuery(Number(user?.id));
	return (
		<ThemeWrapper>
			<AsyncWrapper isLoading = {isLoading} error = {error}>
				<h2 className={styles.user_todos__title}>Задачи пользователя "{user?.username}"</h2>
				<div className={styles.user_todos__list}>
					{toDos?.map((toDo: ToDo) => (
						<div key={`toDo-${toDo.id}`} className={styles.user_todos__todo}>
							<input type="checkbox" name={`toDo-${toDo.id}`} checked={toDo.completed} readOnly />
							<label htmlFor={`toDo-${toDo.id}`}>{toDo.title}</label>
						</div>
					))}
				</div>
			</AsyncWrapper>
		</ThemeWrapper>
	);
};
