import { createContext } from "react";
import type { User } from "@/entities/users/api/usersApi";

type UserContext = { user: User | null; setUser: (user: User | null) => void };
export const UserContext = createContext<UserContext>({} as UserContext);
