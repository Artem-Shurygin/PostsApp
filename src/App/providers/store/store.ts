import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "@/entities/posts/api/postsApi";
import { commentsApi } from "@/entities/comments/api/commentsApi";
import { toDosApi } from "@/entities/toDos/api/toDosApi";
import { usersApi } from "@/entities/users/api/usersApi";
import { albumsApi } from "@/entities/album/api/albumsApi";
import { photosApi } from "@/entities/photos/api/photosApi";
import postReducer from "@/entities/posts/model/slice/postSlice";
import userReducer from "@/entities/users/model/slice/userSlice";

export const store = configureStore({
	reducer: {
		posts: postReducer,
		users: userReducer,
		[usersApi.reducerPath]: usersApi.reducer,
		[postsApi.reducerPath]: postsApi.reducer,
		[commentsApi.reducerPath]: commentsApi.reducer,
		[toDosApi.reducerPath]: toDosApi.reducer,
		[albumsApi.reducerPath]: albumsApi.reducer,
		[photosApi.reducerPath]: photosApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			usersApi.middleware,
			postsApi.middleware,
			commentsApi.middleware,
			toDosApi.middleware,
			albumsApi.middleware,
			photosApi.middleware
		),
});

export type RootState = ReturnType<typeof store.getState>;
