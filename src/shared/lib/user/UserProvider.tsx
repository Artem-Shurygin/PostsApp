import type { FC, ReactNode } from "react";
import { useState } from "react";
import { UserContext } from "@/shared/lib/user/UserContext";

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

type UserProviderProps = {
	children: ReactNode;
};

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
