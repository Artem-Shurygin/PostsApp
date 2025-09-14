import type { FC } from "react";
import clsx from "clsx";
import { useTheme } from "@/shared/lib/theme/useTheme";
import { CommentList } from "@/widgets/CommentList/ui/CommentList";
import styles from "./PostCard.module.scss";
import { formatDate } from "@/utils/formatDate";

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

type PostCardProps = {
	post: Post;
};

export const PostCard: FC<PostCardProps> = ({ post }) => {
	const { theme } = useTheme();
	return (
		<div className={styles.post}>
			<p className={styles.post__title}>{post.title}</p>
			<p className={clsx(styles.post__text, theme === "dark" && styles.post__text__dark_theme)}>{post.text}</p>
			<p className={styles.post__date}>{formatDate(post.date)}</p>
			<CommentList comments={post.comments} />
		</div>
	);
};
