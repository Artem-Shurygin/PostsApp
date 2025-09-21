import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "@/entities/[entity]/api/postsApi";
import { commentsApi } from "@/entities/[entity]/api/commentsApi";
import { toDosApi } from "@/entities/[entity]/api/todosApi";
import { usersApi } from "@/entities/[entity]/api/usersApi";
import { albumsApi } from "@/entities/[entity]/api/albumsApi";
import { photosApi } from "@/entities/[entity]/api/photosApi";

export const store = configureStore({
	reducer: {
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
