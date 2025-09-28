import { usersAdapter } from "./usersAdapter";
import type { RootState } from "@/App/providers/store/store";

export const {
	selectAll: selectAllUsers,
	selectById: selectUserById,
	selectIds: selectUserIds,
} = usersAdapter.getSelectors((state: RootState) => state.users);
