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
			query: (userId) => `albums/?userId=${userId}`,
			providesTags: ( userId) => [{ type: "Album", userId }],
		}),
	}),
});

export const { useGetAlbumsQuery, useGetAlbumByUserIdQuery } = albumsApi;
