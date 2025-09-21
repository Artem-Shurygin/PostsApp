import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "@/entities/[entity]/model/types";

export const usersApi = createApi({
	reducerPath: "usersApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
	tagTypes: ["User"],
	endpoints: (builder) => ({
		getUsers: builder.query<User[], void>({
			query: () => "users",
			providesTags: ["User"],
		}),
		getUserById: builder.query<User, number>({
			query: (userId) => `users/${userId}`,
			providesTags: (userId) => [{ type: "User", userId }],
		}),
	}),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi;
