import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Photo = {
	albumId: number;
	id: number;
	title: string;
	url: string;
	thumbnailUrl: string;
};

export const photosApi = createApi({
	reducerPath: "photosApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
	tagTypes: ["Photo"],
	endpoints: (builder) => ({
		getPhotos: builder.query<Photo[], void>({
			query: () => "photos",
			providesTags: ["Photo"],
		}),
		getPhotoByAlbumId: builder.query<Photo[], number>({
			query: (albumId) => `photos/?albumId=${albumId}`,
			providesTags: (albumId) => [{ type: "Photo", albumId }],
		}),
	}),
});

export const { useGetPhotosQuery, useGetPhotoByAlbumIdQuery } = photosApi;
