import { createContext } from "react";

type User = {
	id: number;
	userName: string;
	postsIds: number[];
	albumsIds: number[];
	toDoList: ToDoList[];
};
type ToDoList = {
	id: number;
	task: string;
	completed: boolean;
	priority: string;
	category: string;
};

type UserContext = { user: User | null; setUser: (user: User | null) => void };
export const UserContext = createContext<UserContext>({} as UserContext);
