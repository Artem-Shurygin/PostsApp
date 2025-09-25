import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export const postsApi = createApi({
	reducerPath: "postsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
	tagTypes: ["Post"],
	endpoints: (builder) => ({
		getPosts: builder.query<Post[], void>({
			query: () => "posts",
			providesTags: ["Post"],
		}),
		getPostById: builder.query<Post, number>({
			query: (postId) => `posts/${postId}`,
			providesTags: (postId) => [{ type: "Post", postId }],
		}),
		getPostByUserId: builder.query<Post[], number>({
			query: (UserId) => `posts/?userId=${UserId}`,
			providesTags: (UserId) => [{ type: "Post", UserId }],
		}),

		createPost: builder.mutation<Post, Partial<Post>>({
			query: (newPost) => ({
				url: "posts",
				method: "POST",
				body: newPost,
			}),
			invalidatesTags: [{ type: "Post", id: "LIST" }],
		}),

		updatePost: builder.mutation<Post, Partial<Post>>({
			query: ({ id, ...patch }) => ({
				url: `posts/${id}`,
				method: "PUT",
				body: patch,
			}),
			invalidatesTags: (result, error, { id }) => [{ type: "Post", id }],
		}),

		deletePost: builder.mutation<void, number>({
			query: (id) => ({
				url: `posts/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: (result, error, id) => [
				{ type: "Post", id },
				{ type: "Post", id: "LIST" },
			],
		}),
	}),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useGetPostByUserIdQuery } = postsApi;
