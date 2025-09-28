import styles from "./ToDoItem.module.scss";
import type { ToDo } from "@/entities/toDos/api/toDosApi";

type toDoItemProps = {
	toDo: ToDo;
};

export const ToDoItem = ({ toDo }: toDoItemProps) => {
	return (
		<div key={`toDo-${toDo.id}`} className={styles.todo}>
			<input type="checkbox" name={`toDo-${toDo.id}`} checked={toDo.completed} readOnly />
			<label htmlFor={`toDo-${toDo.id}`}>{toDo.title}</label>
		</div>
	);
};