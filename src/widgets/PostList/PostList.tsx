import clsx from "clsx";
import { PostCard } from "@/entities/post/ui/PostCard/PostCard";
import { testPostData } from "@/shared/mocks/testData";
import { formatDate } from "@/utils/formatDate";
import styles from "./PostList.module.scss";

type Post = {
	id: number;
	title: string;
	text: string;
	date: string;
};

export const PostList = () => {
	const data: Post[] = testPostData;
	return (
		<div className={styles.wrapper}>
			<div className={clsx("container", styles.post_list)}>
				{data.map((post: Post) => {
					return (
						<PostCard key={post.id} id={post.id} title={post.title} text={post.text} date={formatDate(post.date)} />
					);
				})}
			</div>
		</div>
	);
};
