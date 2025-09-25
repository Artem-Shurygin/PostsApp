import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Comment } from "@/entities/comments/model/types";

export const commentsApi = createApi({
	reducerPath: "commentsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
	tagTypes: ["Comment"],
	endpoints: (builder) => ({
		getCommentsByPostId: builder.query<Comment[], number>({
			query: (postId) => `comments/?postId=${postId}`,
			providesTags: (postId) => [{ type: "Comment", postId }],
		}),

		createComment: builder.mutation<Comment, Partial<Comment>>({
			query: (newComment) => ({
				url: "comments",
				method: "POST",
				body: newComment,
			}),
			invalidatesTags: ["Comment"],
		}),
	}),
});

export const { useGetCommentsByPostIdQuery } = commentsApi;
