import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type ToDo = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
};

export const toDosApi = createApi({
	reducerPath: "toDosApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
	tagTypes: ["ToDo"],
	endpoints: (builder) => ({
		getToDosByUserId: builder.query<ToDo[], number>({
			query: (userId) => `todos/?userId=${userId}`,
			providesTags: (userId) => [{ type: "ToDo", userId }],
		}),

		updateToDo: builder.mutation<ToDo, Partial<ToDo>>({
			query: ({ id, ...patch }) => ({
				url: `todos/${id}`,
				method: "PATCH",
				body: patch,
			}),
			invalidatesTags: (result, error, { id }) => [{ type: "ToDo", id }],
		}),
	}),
});

export const { useGetToDosByUserIdQuery } = toDosApi;
