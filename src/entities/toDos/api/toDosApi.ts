import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ToDo } from "@/entities/toDos/model/types";

export const toDosApi = createApi({
	reducerPath: "toDosApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
	tagTypes: ["ToDo"],
	endpoints: (builder) => ({
		getToDosByUserId: builder.query<ToDo[], number>({
			query: (userId) => `todos/?userId=${userId}`,
			providesTags: (userId) => [{ type: "ToDo", userId }],
		}),
	}),
});

export const { useGetToDosByUserIdQuery } = toDosApi;
