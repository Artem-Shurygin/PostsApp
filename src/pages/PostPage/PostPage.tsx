import { useTheme } from "@/shared/lib/theme/useTheme";
import clsx from "clsx";
import type { FC } from "react";
import { useParams } from "react-router-dom";
import { PostCard } from "@/entities/post/ui/PostCard/PostCard";
import { useGetPostByIdQuery } from "@/entities/[entity]/api/postsApi";

export const PostPage: FC = () => {
	const { theme } = useTheme();
	const { postId } = useParams();
	const { data: post, isLoading } = useGetPostByIdQuery(Number(postId));

	return (
		<div className={`theme_outer_wrapper__${theme}`}>
			<div className={clsx("container", `theme_inner_wrapper__${theme}`)}>
				{post && <PostCard post={post} />}
				{!post && !isLoading && <p>Данный пост отсутствует</p>}
			</div>
		</div>
	);
};
