import { postsAdapter } from "./postsAdapter";
import type { RootState } from "@/App/providers/store/store";

export const {
	selectAll: selectAllPosts,
	selectById: selectPostById,
	selectIds: selectPostIds,
} = postsAdapter.getSelectors((state: RootState) => state.posts);
