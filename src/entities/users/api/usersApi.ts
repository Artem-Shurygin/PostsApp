import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "@/entities/users/model/types";

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
			query: (id) => `users/${id}`,
			providesTags: (result, error, id) => [{ type: "User", id }],
		}),

		createUser: builder.mutation<User, Partial<User>>({
			query: (newUser) => ({
				url: "users",
				method: "POST",
				body: newUser,
			}),
			invalidatesTags: ["User"],
		}),

		updateUser: builder.mutation<User, Partial<User>>({
			query: ({ id, ...patch }) => ({
				url: `users/${id}`,
				method: "PUT",
				body: patch,
			}),
			invalidatesTags: (result, error, { id }) => [{ type: "User", id }],
		}),

		deleteUser: builder.mutation<void, number>({
			query: (id) => ({
				url: `users/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: (result, error, id) => [{ type: "User", id }],
		}),
	}),
});

export const {
	useGetUsersQuery,
	useGetUserByIdQuery,
	useCreateUserMutation,
	useUpdateUserMutation,
	useDeleteUserMutation,
} = usersApi;
