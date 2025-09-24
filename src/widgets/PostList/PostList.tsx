import { PostCard } from "@/entities/post/ui/PostCard/PostCard";
import { PostLengthFilter } from "@/features/PostLengthFilter/ui/PostLengthFilter";
import styles from "./PostList.module.scss";
import { usePosts } from "./model/hooks/usePosts";
import { type Post } from "@/entities/[entity]/api/postsApi";
import { AsyncWrapper } from "@/widgets/AsyncWrapper/AsyncWrapper";
import { ThemeWrapper } from "@/widgets/ThemeWrapper/ThemeWrapper";

export const PostList = () => {
	const { data, isLoading, error, filteredData, handleDataFromFilter } = usePosts();
	return (
		<ThemeWrapper innerStyles={[styles.post_list]}>
			<AsyncWrapper isLoading={isLoading} error={error}>
				{data && <PostLengthFilter posts={data} onDataSend={handleDataFromFilter} />}
				{(filteredData || data)?.map((post: Post) => {
					return <PostCard key={`postCard-${post.id}`} post={post} />;
				})}
			</AsyncWrapper>
		</ThemeWrapper>
	);
};
