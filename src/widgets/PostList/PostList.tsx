import { useState, type FC } from "react";
import clsx from "clsx";
import { PostCard } from "@/entities/post/ui/PostCard/PostCard";
import { PostLengthFilter } from "@/features/PostLengthFilter/ui/PostLengthFilter";
import styles from "./PostList.module.scss";
import { testDataPostWithComments } from "@/shared/mocks/testDataPostWithComments";
import { useTheme } from "@/shared/lib/theme/useTheme";

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

export const PostList: FC = () => {
	const { theme } = useTheme();
	const data: Post[] = testDataPostWithComments;

	const [filterData, setfilterData] = useState(data);

	const handleDataFromFilter = (data: Post[]) => {
		setfilterData(data);
	};

	return (
		<div className={clsx(styles.wrapper, theme === "dark" && styles.wrapper__dark_theme)}>
			<div className={clsx("container", styles.post_list, theme === "dark" && styles.post_list__dark_theme)}>
				<PostLengthFilter posts={data} onDataSend={handleDataFromFilter} />
				{filterData.map((post: Post) => {
					return <PostCard key={`postCard-${post.id}`} post={post} />;
				})}
			</div>
		</div>
	);
};
