import { PostCard } from "@/entities/posts/ui/PostCard/PostCard";
import { PostLengthFilter } from "@/features/PostLengthFilter/ui/PostLengthFilter";
import styles from "./PostList.module.scss";
import { usePosts } from "./model/hooks/usePosts";
import type { Post } from "@/entities/posts/model/types";
import { AsyncWrapper } from "@/widgets/AsyncWrapper/AsyncWrapper";
import { ThemeWrapper } from "@/widgets/ThemeWrapper/ThemeWrapper";

export const PostList = () => {
	const { data, storedPosts, isLoading, error, filteredData, handleDataFromFilter } = usePosts();
	const posts = data || storedPosts;
	return (
		<ThemeWrapper innerStyles={[styles.post_list]}>
			<AsyncWrapper isLoading={isLoading} error={error}>
				{posts && <PostLengthFilter posts={posts} onDataSend={handleDataFromFilter} />}
				{(filteredData || posts)?.map((post: Post) => {
					return <PostCard key={`postCard-${post.id}`} post={post} />;
				})}
			</AsyncWrapper>
		</ThemeWrapper>
	);
};
