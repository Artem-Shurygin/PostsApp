import type { FC } from "react";
import { useParams } from "react-router-dom";
import { PostCard } from "@/entities/posts/ui/PostCard/PostCard";
import { useGetPostByIdQuery } from "@/entities/posts/api/postsApi";
import { AsyncWrapper } from "@/widgets/AsyncWrapper/AsyncWrapper";
import { ThemeWrapper } from "@/widgets/ThemeWrapper/ThemeWrapper";

export const PostPage: FC = () => {
	const { postId } = useParams();
	const { data: post, isLoading, error } = useGetPostByIdQuery(Number(postId));

	return (
		<ThemeWrapper>
			<AsyncWrapper isLoading={isLoading} error={error}>
				{post && <PostCard post={post} />}
			</AsyncWrapper>
		</ThemeWrapper>
	);
};
