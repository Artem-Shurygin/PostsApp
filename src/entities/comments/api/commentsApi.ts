import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Comment } from "@/entities/comments/model/types";

export const commentsApi = createApi({
	reducerPath: "commentsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
	tagTypes: ["Comment"],
	endpoints: (builder) => ({
		getCommentsByPostId: builder.query<Comment[], number>({
			query: (id) => `comments/?postId=${id}`,
			providesTags: (result, error, id) => [{ type: "Comment", id }],
		}),

		createComment: builder.mutation<Comment, Partial<Comment>>({
			query: (newComment) => ({
				url: "comments",
				method: "POST",
				body: newComment,
			}),
			invalidatesTags: ["Comment"],
		}),

		updateComment: builder.mutation<Comment, Partial<Comment>>({
			query: ({ id, ...patch }) => ({
				url: `comments/${id}`,
				method: "PUT",
				body: patch,
			}),
			invalidatesTags: (result, error, { id }) => [{ type: "Comment", id }],
		}),

		deleteComment: builder.mutation<void, number>({
			query: (id) => ({
				url: `comments/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: (result, error, id) => [{ type: "Comment", id }],
		}),
	}),
});

export const {
	useGetCommentsByPostIdQuery,
	useCreateCommentMutation,
	useUpdateCommentMutation,
	useDeleteCommentMutation,
} = commentsApi;
