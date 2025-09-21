import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: number;
			lng: number;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
};

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
