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
			query: (id) => `posts/${id}`,
			providesTags: (result, error, id) => [{ type: "Post", id }],
		}),
		getPostByUserId: builder.query<Post[], number>({
			query: (id) => `posts/?userId=${id}`,
			providesTags: (result, error, id) => [{ type: "Post", id }],
		}),

		createPost: builder.mutation<Post, Partial<Post>>({
			query: (newPost) => ({
				url: "posts",
				method: "POST",
				body: newPost,
			}),
			invalidatesTags: ["Post"],
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
			invalidatesTags: (result, error, id) => [{ type: "Post", id }],
		}),
	}),
});

export const {
	useGetPostsQuery,
	useGetPostByIdQuery,
	useGetPostByUserIdQuery,
	useCreatePostMutation,
	useUpdatePostMutation,
	useDeletePostMutation,
} = postsApi;
