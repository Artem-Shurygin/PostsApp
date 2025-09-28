import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Album = {
	userId: number;
	id: number;
	title: string;
};

export const albumsApi = createApi({
	reducerPath: "albumsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
	tagTypes: ["Album"],
	endpoints: (builder) => ({
		getAlbums: builder.query<Album[], void>({
			query: () => "albums",
			providesTags: ["Album"],
		}),
		getAlbumByUserId: builder.query<Album[], number>({
			query: (id) => `albums/?userId=${id}`,
			providesTags: (result, error, id) => [{ type: "Album", id }],
		}),

		createAlbum: builder.mutation<Album, Partial<Album>>({
			query: (newPost) => ({
				url: "albums",
				method: "POST",
				body: newPost,
			}),
			invalidatesTags: ["Album"],
		}),

		updateAlbum: builder.mutation<Album, Partial<Album>>({
			query: ({ id, ...patch }) => ({
				url: `albums/${id}`,
				method: "PUT",
				body: patch,
			}),
			invalidatesTags: (result, error, { id }) => [{ type: "Album", id }],
		}),

		deleteAlbum: builder.mutation<void, number>({
			query: (id) => ({
				url: `albums/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: (result, error, id) => [{ type: "Album", id }],
		}),
	}),
});

export const {
	useGetAlbumsQuery,
	useGetAlbumByUserIdQuery,
	useCreateAlbumMutation,
	useUpdateAlbumMutation,
	useDeleteAlbumMutation,
} = albumsApi;
