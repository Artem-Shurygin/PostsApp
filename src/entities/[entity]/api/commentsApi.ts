import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Comment } from "@/entities/[entity]/model/types";

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
