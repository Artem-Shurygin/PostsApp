import { useTheme } from "@/shared/lib/theme/useTheme";
import { useMemo } from "react";
import clsx from "clsx";
import type { FC } from "react";
import { useParams } from "react-router-dom";
import { testDataPostWithComments } from "@/shared/mocks/testDataPostWithComments";
import { PostCard } from "@/entities/post/ui/PostCard/PostCard";

type PostComment = {
	id: number;
	author: string;
	text: string;
	date: string;
};

type Post = {
	id: number;
	title: string;
	text: string;
	date: string;
	comments: PostComment[];
};

export const PostPage: FC = () => {
	const { theme } = useTheme();
	const { postId } = useParams();

	//Получение постов пользователя
	const posts: Post[] = testDataPostWithComments;
	const currentPost: Post | undefined = useMemo(() => posts.find((post) => post.id === Number(postId)), []);
	return (
		<div className={`theme_outer_wrapper__${theme}`}>
			<div className={clsx("container", `theme_inner_wrapper__${theme}`)}>
				{currentPost ? (
					<PostCard key={`postCard-${currentPost.id}`} post={currentPost} />
				) : (
					<p>Данный пост отсутствует</p>
				)}
			</div>
		</div>
	);
};
