import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Comment = {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
};

export const commentsApi = createApi({
	reducerPath: "commentsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
	tagTypes: ["Comment"],
	endpoints: (builder) => ({
		getCommentsByPostId: builder.query<Comment[], number>({
			query: (postId) => `comments/?postId=${postId}`,
			providesTags: ( postId) => [{ type: "Comment", postId }],
		}),
	}),
});

export const { useGetCommentsByPostIdQuery } = commentsApi;
