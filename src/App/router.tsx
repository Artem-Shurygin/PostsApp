import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/shared/layouts/MainLayout";
import { PostPage } from "@/pages/PostPage/PostPage";
import { PostsFeedPage } from "@/pages/PostsFeedPage/PostsFeedPage";
import { HomePage } from "@/pages/HomePage/HomePage";
import { UserAlbumsPage } from "@/pages/UserAlbumsPage/UserAlbumsPage";
import { UserPostsPage } from "@/pages/UserPostsPage/UserPostsPage";
import { UserToDosPage } from "@/pages/UserToDosPage/UserToDosPage";
import { AlbumPage } from "@/pages/AlbumPage/AlbumPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [{ index: true, element: <HomePage /> }],
	},
	{
		path: "/posts",
		element: <MainLayout />,
		children: [
			{ index: true, element: <PostsFeedPage /> },
			{ path: "/posts/:id", element: <PostPage /> },
		],
	},

	{
		path: "/posts",
		element: <MainLayout />,
		children: [
			{ index: true, element: <PostsFeedPage /> },
			{ path: "/posts/:id", element: <PostPage /> },
		],
	},
	{
		path: "/users",
		element: <MainLayout />,
		children: [
			{ index: true, element: null },
			{ path: `/users/:id/posts`, element: <UserPostsPage /> },
			{ path: `/users/:id/albums`, element: <UserAlbumsPage /> },
			{ path: `/users/:id/todos`, element: <UserToDosPage /> },
		],
	},
	{
		path: "/albums",
		element: <MainLayout />,
		children: [
			{ index: true, element: null },
			{ path: `/albums/:id/photos`, element: <AlbumPage /> },
		],
	},
]);
