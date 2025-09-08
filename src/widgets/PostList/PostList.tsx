import clsx from "clsx";
import PostCard from "@/entities/post/ui/PostCard/PostCard";
import PostLengthFilter from "@/features/PostLengthFilter/ui/PostLengthFilter";
import WithLoading from "@/shared/lib/hoc/WithLoading";
import styles from "./PostList.module.scss";
import testData from "@/testData/postsWithComments";
import formatDate from "@/utils/formatDate";

import { useState, useMemo } from "react";
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

const PostList = () => {
	const { theme } = useTheme();
	const data: Post[] = useMemo(() => JSON.parse(testData), []);

	const [filterData, setfilterData] = useState(data);

	const handleDataFromFilter = (data:Post[]) => {
		setfilterData(data);
	};

	return (
		<div className={clsx(styles.wrapper, theme === "dark" && styles.wrapper__dark_theme)}>
			<div className={clsx("container", styles.post_list, theme === "dark" && styles.post_list__dark_theme)}>
				<PostLengthFilter posts={data} onDataSend={handleDataFromFilter} />
				{filterData.map((post: Post) => {
					return (
						<PostCard key={post.id} id={post.id} title={post.title} text={post.text} date={formatDate(post.date)} comments = {post.comments}/>
					);
				})}
			</div>
		</div>
	);
};

export default WithLoading(PostList);
