import type { PropsWithChildren } from "react";
import { useState } from "react";
import { UserContext } from "@/shared/lib/user/UserContext";
import type { User } from "@/entities/[entity]/model/types";

export const UserProvider = ({ children }: PropsWithChildren) => {
	const [user, setUser] = useState<User | null>(null);

	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
