import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post } from "@/entities/[entity]/model/types";

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
	}),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useGetPostByUserIdQuery } = postsApi;
