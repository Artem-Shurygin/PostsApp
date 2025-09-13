import type { FC } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useTheme } from "@/shared/lib/theme/useTheme";
import { CommentList } from "@/widgets/CommentList/ui/CommentList";
import styles from "./PostCard.module.scss";

type PostComment = {
	id: number;
	author: string;
	text: string;
	date: string;
};

type PostProps = {
	id: number;
	title: string;
	text: string;
	date: string;
	comments: PostComment[];
};

export const PostCard: FC<PostProps> = ({ id, title, text, date, comments }) => {
	const { theme } = useTheme();
	return (
		<div className={styles.post}>
			<NavLink to={`/posts/${id}`} className={styles.post__title}>
				{title}
			</NavLink>
			<p className={clsx(styles.post__text, theme === "dark" && styles.post__text__dark_theme)}>{text}</p>
			<div className={styles.post__footer}>
			
			<CommentList comments={comments} />
			<p className={styles.post__date}>{date}</p>
			</div>

		</div>
	);
};
