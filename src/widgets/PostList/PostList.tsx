import clsx from "clsx";
import { PostCard } from "@/entities/post/ui/PostCard/PostCard";
import { PostLengthFilter } from "@/features/PostLengthFilter/ui/PostLengthFilter";
import styles from "./PostList.module.scss";
import { usePosts } from "./model/hooks/usePosts";

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

export const PostList = () => {
	const { theme, data, filteredData, handleDataFromFilter } = usePosts();
	return (
		<div className={clsx(styles.wrapper, theme === "dark" && styles.wrapper__dark_theme)}>
			<div className={clsx("container", styles.post_list, theme === "dark" && styles.post_list__dark_theme)}>
				<PostLengthFilter posts={data} onDataSend={handleDataFromFilter} />
				{filteredData.map((post: Post) => {
					return <PostCard key={`postCard-${post.id}`} post={post} />;
				})}
			</div>
		</div>
	);
};
