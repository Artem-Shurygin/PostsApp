import clsx from "clsx";
import styles from "./PostComment.module.scss";
import type { Comment } from "@/entities/comments/model/types";

type PostCommentProps = {
	comment: Comment;
};

export const PostComment = ({ comment }: PostCommentProps) => {
	return (
		<div className={styles.comment_list__comment}>
			<p className={clsx(styles.comment_list__author)}>{comment.name}</p>
			<p className={clsx(styles.comment_list__text)}>{comment.body}</p>
		</div>
	);
};
