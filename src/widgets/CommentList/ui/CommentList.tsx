import React from "react";
import { useState } from "react";
import type { FC } from "react";
import clsx from "clsx";
import { useTheme } from "@/shared/lib/theme/useTheme";
import formatDate from "@/utils/formatDate";
import styles from "./CommentList.module.scss";

type PostComment = {
	id: number;
	author: string;
	text: string;
	date: string;
};

type CommentListProps = {
	comments: PostComment[];
};

const CommentList: FC<CommentListProps> = ({ comments }) => {
	const { theme } = useTheme();
	const [isCommentsOpen, setIsCommentsOpen] = useState(false);

	const handleClickCommentdBtn: React.MouseEventHandler<HTMLButtonElement> = () => {
		setIsCommentsOpen(!isCommentsOpen);
	};

	return (
		<div className={styles.comment_list}>
			<button onClick={handleClickCommentdBtn} className={styles.comment_list__toggle_comments_btn}>комментарии</button>
			{isCommentsOpen && (
				<div className={styles.comment_list__coomments_box}>
					{comments.map((comment) => (
						<div key={`comment-${comment.id}`} className={styles.comment_list__comment}>
							<p className={clsx(styles.comment_list__author, theme === "dark" && styles.comment_list__author__dark_theme)}>{comment.author}</p>
							<p  className={clsx(styles.comment_list__text, theme === "dark" && styles.comment_list__text__dark_theme)}>{comment.text}</p>
							<p className={styles.comment_list__date}>{formatDate(comment.date)}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default CommentList;
