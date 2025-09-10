import clsx from "clsx";
import { PostCard } from "@/entities/post/ui/PostCard/PostCard";
import { PostLengthFilter } from "@/features/PostLengthFilter/ui/PostLengthFilter";
import { withLoading } from "@/shared/lib/hoc/WithLoading";
import styles from "./PostList.module.scss";
import { formatDate } from "@/utils/formatDate";
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

const PostList = () => {
	const { theme, data, filteredData, handleDataFromFilter } = usePosts();
	return (
		<div className={clsx(styles.wrapper, theme === "dark" && styles.wrapper__dark_theme)}>
			<div className={clsx("container", styles.post_list, theme === "dark" && styles.post_list__dark_theme)}>
				<PostLengthFilter posts={data} onDataSend={handleDataFromFilter} />
				{filteredData.map((post: Post) => {
					return (
						<PostCard
							key={post.id}
							id={post.id}
							title={post.title}
							text={post.text}
							date={formatDate(post.date)}
							comments={post.comments}
						/>
					);
				})}
			</div>
		</div>
	);
};

const PostListWithLoading = withLoading(PostList);
export { PostListWithLoading as PostList };
