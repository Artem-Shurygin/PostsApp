import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ToDo } from "@/entities/toDos/model/types";

export const toDosApi = createApi({
	reducerPath: "toDosApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
	tagTypes: ["ToDo"],
	endpoints: (builder) => ({
		getToDosByUserId: builder.query<ToDo[], number>({
			query: (id) => `todos/?userId=${id}`,
			providesTags: (result, error, id) => [{ type: "ToDo", id }],
		}),

		createToDo: builder.mutation<ToDo, Partial<ToDo>>({
			query: (newToDo) => ({
				url: "todos",
				method: "POST",
				body: newToDo,
			}),
			invalidatesTags: ["ToDo"],
		}),

		updateToDo: builder.mutation<ToDo, Partial<ToDo>>({
			query: ({ id, ...patch }) => ({
				url: `todos/${id}`,
				method: "PUT",
				body: patch,
			}),
			invalidatesTags: (result, error, { id }) => [{ type: "ToDo", id }],
		}),

		deleteToDo: builder.mutation<void, number>({
			query: (id) => ({
				url: `todos/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: (result, error, id) => [{ type: "ToDo", id }],
		}),
	}),
});

export const { useGetToDosByUserIdQuery, useCreateToDoMutation, useUpdateToDoMutation, useDeleteToDoMutation } =
	toDosApi;
