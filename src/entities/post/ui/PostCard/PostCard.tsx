import type { FC } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useTheme } from "@/shared/lib/theme/useTheme";
import { formatDate } from "@/utils/formatDate";
import { CommentList } from "@/widgets/CommentList/ui/CommentList";
import styles from "./PostCard.module.scss";

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
			<NavLink to={`/posts/${post.id}`} className={styles.post__title}>
				{post.title}
			</NavLink>
			<p className={clsx(styles.post__text, theme === "dark" && styles.post__text__dark_theme)}>{post.text}</p>
			<div className={styles.post__footer}>
				<CommentList comments={post.comments} />
				<p className={styles.post__date}>{formatDate(post.date)}</p>
			</div>
		</div>
	);
};
