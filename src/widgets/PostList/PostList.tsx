import { useContext } from "react";
import clsx from "clsx";
import PostCard from "@/entities/post/ui/PostCard/PostCard";
import styles from "./PostList.module.scss";
import testData from "@/testData";
import formatDate from "@/utils/formatDate";

type Post = {
	id: number;
	title: string;
	text: string;
	date: string;
};
import { useTheme } from "@/shared/lib/theme/useTheme";

const PostList = () => {
	const data = JSON.parse(testData);

	const { theme } = useContext(useTheme);
	return (
		<div className={clsx(styles.wrapper, theme === "dark" && styles.wrapper__dark_theme)}>
			<div className={clsx("container", styles.post_list, theme === "dark" && styles.post_list__dark_theme)}>
				{data.map((post: Post) => {
					return (
						<PostCard key={post.id} id={post.id} title={post.title} text={post.text} date={formatDate(post.date)} />
					);
				})}
			</div>
		</div>
	);
};

export default PostList;
