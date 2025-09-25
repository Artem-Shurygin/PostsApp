import styles from "./UserToDosPage.module.scss";
import { useUser } from "@/shared/lib/user/useUser";
import { useGetToDosByUserIdQuery } from "@/entities/toDos/api/toDosApi";
import { AsyncWrapper } from "@/widgets/AsyncWrapper/AsyncWrapper";
import { ThemeWrapper } from "@/widgets/ThemeWrapper/ThemeWrapper";
import { ItemList } from "@/shared/ui/ItemList/ItemList";

export const UserToDosPage = () => {
	const { user } = useUser();
	const { data: toDos, isLoading, error } = useGetToDosByUserIdQuery(Number(user?.id));

	return (
		<ThemeWrapper>
			<AsyncWrapper isLoading={isLoading} error={error}>
				{toDos && (
					<ItemList
						title={`Задачи пользователя "${user?.username}"`}
						items={toDos}
						children={(toDo) => (
							<div key={`toDo-${toDo.id}`} className={styles.user_todos__todo}>
								<input type="checkbox" name={`toDo-${toDo.id}`} checked={toDo.completed} readOnly />
								<label htmlFor={`toDo-${toDo.id}`}>{toDo.title}</label>
							</div>
						)}
					/>
				)}
			</AsyncWrapper>
		</ThemeWrapper>
	);
};
