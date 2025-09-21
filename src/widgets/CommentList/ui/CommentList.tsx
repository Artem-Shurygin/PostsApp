import { useState } from "react";
import type { MouseEventHandler } from "react";
import clsx from "clsx";
import { useTheme } from "@/shared/lib/theme/useTheme";
import styles from "./CommentList.module.scss";
import { useGetCommentsByPostIdQuery } from "@/entities/[entity]/api/commentsApi";

type CommentListProps = {
	postId: number;
};

export const CommentList = ({ postId }: CommentListProps) => {
	const { theme } = useTheme();
	const [isCommentsOpen, setIsCommentsOpen] = useState(false);

	const { data } = useGetCommentsByPostIdQuery(postId, {
		//не подгружает данные комментариев, пока они не расскрыты
		skip: !isCommentsOpen,
	});

	const handleClickCommentdBtn: MouseEventHandler<HTMLButtonElement> = () => {
		setIsCommentsOpen(!isCommentsOpen);
	};

	return (
		<div className={styles.comment_list}>
			<button onClick={handleClickCommentdBtn} className={styles.comment_list__toggle_comments_btn}>
				комментарии
			</button>
			{isCommentsOpen && (
				<div className={styles.comment_list__coomments_box}>
					{data &&
						data.map((comment) => (
							<div key={`comment-${comment.id}`} className={styles.comment_list__comment}>
								<p
									className={clsx(
										styles.comment_list__author,
										theme === "dark" && styles.comment_list__author__dark_theme
									)}
								>
									{comment.name}
								</p>
								<p
									className={clsx(styles.comment_list__text, theme === "dark" && styles.comment_list__text__dark_theme)}
								>
									{comment.body}
								</p>
							</div>
						))}
				</div>
			)}
		</div>
	);
};
