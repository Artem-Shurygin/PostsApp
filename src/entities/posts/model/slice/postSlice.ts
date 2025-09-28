import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Post } from "@/entities/posts/api/postsApi";
import { postsAdapter } from "./postsAdapter";

const postSlice = createSlice({
	name: "posts",
	initialState: postsAdapter.getInitialState({
		loading: false,
		error: null as string | null,
		selectedPostId: null as number | null,
	}),
	reducers: {
		postAdded: postsAdapter.addOne,
		postUpdated: postsAdapter.updateOne,
		postDeleted: postsAdapter.removeOne,
		postsReceived: (state, action: PayloadAction<Post[]>) => {
			postsAdapter.setAll(state, action.payload);
		},
		setSelectedPostId: (state, action: PayloadAction<number>) => {
			state.selectedPostId = action.payload;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
		setError: (state, action: PayloadAction<string | null>) => {
			state.error = action.payload;
		},
	},
});



export const { postAdded, postUpdated, postDeleted, postsReceived, setSelectedPostId, setLoading, setError } =
	postSlice.actions;

export default postSlice.reducer;
