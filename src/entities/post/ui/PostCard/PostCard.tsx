import type { FC } from "react";
import clsx from "clsx";
import { useTheme } from "@/shared/lib/theme/useTheme";
import CommentList from "@/widgets/CommentList/ui/CommentList"
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

const PostCard: FC<PostProps> = ({ title, text, date, comments }) => {
	const { theme } = useTheme();
	return (
		<div className={styles.post}>
			<p className={styles.post__title}>{title}</p>
			<p className={clsx(styles.post__text, theme === "dark" && styles.post__text__dark_theme)}>{text}</p>
			<p className={styles.post__date}>{date}</p>
			<CommentList comments={comments}/>
		</div>
	);
};

export default PostCard;
