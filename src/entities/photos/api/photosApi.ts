import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Photo } from "@/entities/photos/model/types";

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
			query: (id) => `photos/?albumId=${id}`,
			providesTags: (result, error, id) => [{ type: "Photo", id }],
		}),

		createPhoto: builder.mutation<Photo, Partial<Photo>>({
			query: (newPhoto) => ({
				url: "photos",
				method: "POST",
				body: newPhoto,
			}),
			invalidatesTags: ["Photo"],
		}),

		updatePhoto: builder.mutation<Photo, Partial<Photo>>({
			query: ({ id, ...patch }) => ({
				url: `photos/${id}`,
				method: "PUT",
				body: patch,
			}),
			invalidatesTags: (result, error, { id }) => [{ type: "Photo", id }],
		}),

		deletePhoto: builder.mutation<void, number>({
			query: (id) => ({
				url: `photos/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: (result, error, id) => [{ type: "Photo", id }],
		}),
	}),
});

export const {
	useGetPhotosQuery,
	useGetPhotoByAlbumIdQuery,
	useCreatePhotoMutation,
	useUpdatePhotoMutation,
	useDeletePhotoMutation,
} = photosApi;
