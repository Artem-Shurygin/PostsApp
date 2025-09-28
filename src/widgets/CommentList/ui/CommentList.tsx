import { useState } from "react";
import type { FC } from "react";
import styles from "./CommentList.module.scss";
import { useGetCommentsByPostIdQuery } from "@/entities/comments/api/commentsApi";
import { AsyncWrapper } from "@/widgets/AsyncWrapper/AsyncWrapper";
import { PostComment } from "@/entities/posts/ui/PostComment/PostComment";

type CommentListProps = {
	postId: number;
};

export const CommentList: FC<CommentListProps> = ({ postId }) => {
	const [isCommentsOpen, setIsCommentsOpen] = useState(false);

	const { data, isLoading, error } = useGetCommentsByPostIdQuery(postId, {
		//не подгружает данные комментариев, пока они не расскрыты
		skip: !isCommentsOpen,
	});

	const handleClickCommentdBtn: React.MouseEventHandler<HTMLButtonElement> = () => {
		setIsCommentsOpen(!isCommentsOpen);
	};

	return (
		<div className={styles.comment_list}>
			<button onClick={handleClickCommentdBtn} className={styles.comment_list__toggle_comments_btn}>
				комментарии
			</button>
			{isCommentsOpen && (
				<div className={styles.comment_list__coomments_box}>
					<AsyncWrapper isLoading={isLoading} error={error}>
						{data && data.map((comment) => <PostComment key={`comment-${comment.id}`} comment={comment} />)}
					</AsyncWrapper>
				</div>
			)}
		</div>
	);
};
