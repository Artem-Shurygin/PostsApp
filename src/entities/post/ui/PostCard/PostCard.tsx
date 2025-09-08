import type { FC } from "react";
import styles from "./PostCard.module.scss";

type PostProps = {
	id: number;
	title: string;
	text: string;
	date: string;
};

export const PostCard: FC<PostProps> = ({ title, text, date }) => {
	return (
		<div className={styles.post}>
			<p className={styles.post__title}>{title}</p>
			<p className={styles.post__text}>{text}</p>
			<p className={styles.post__date}>{date}</p>
		</div>
	);
};
