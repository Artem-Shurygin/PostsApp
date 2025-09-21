import clsx from "clsx";
import styles from "./UserToDosPage.module.scss";
import { useTheme } from "@/shared/lib/theme/useTheme";
import { useUser } from "@/shared/lib/user/useUser";
import { useGetToDosByUserIdQuery } from "@/entities/[entity]/api/toDosApi";
import type { ToDo } from "@/entities/[entity]/model/types";

export const UserToDosPage = ({}: {}) => {
	const { theme } = useTheme();
	const { user } = useUser();
	const { data: toDos } = useGetToDosByUserIdQuery(Number(user?.id));

	return (
		<div className={`theme_outer_wrapper__${theme}`}>
			<div className={clsx("container", `theme_inner_wrapper__${theme}`)}>
				<h2 className={styles.user_todos__title}>Задачи пользователя "{user?.username}"</h2>
				<div className={styles.user_todos__list}>
					{toDos?.map((toDo: ToDo) => (
						<div key={`toDo-${toDo.id}`} className={styles.user_todos__todo}>
							<input type="checkbox" name={`toDo-${toDo.id}`} checked={toDo.completed} readOnly />
							<label htmlFor={`toDo-${toDo.id}`}>{toDo.title}</label>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
