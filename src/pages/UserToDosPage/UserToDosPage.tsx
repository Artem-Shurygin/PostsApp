import { useUser } from "@/shared/lib/user/useUser";
import { useGetToDosByUserIdQuery } from "@/entities/toDos/api/toDosApi";
import { AsyncWrapper } from "@/widgets/AsyncWrapper/AsyncWrapper";
import { ThemeWrapper } from "@/widgets/ThemeWrapper/ThemeWrapper";
import { ItemList } from "@/shared/ui/ItemList/ItemList";
import { ToDoItem } from "@/entities/toDos//ui/ToDoItem/ToDoItem";

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
						children={(toDo) => <ToDoItem toDo={toDo} />}
					/>
				)}
			</AsyncWrapper>
		</ThemeWrapper>
	);
};
