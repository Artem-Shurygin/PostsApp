import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useTheme } from "@/shared/lib/theme/useTheme";
import { CommentList } from "@/widgets/CommentList/ui/CommentList";
import styles from "./PostCard.module.scss";
import type { Post } from "@/entities/posts/model/types";

type PostCardProps = {
	post: Post;
};

export const PostCard = ({ post }: PostCardProps) => {
	const { theme } = useTheme();
	return (
		<div className={styles.post}>
			<NavLink to={`/posts/${post.id}`} className={styles.post__title}>
				{post.title}
			</NavLink>
			<p className={clsx(styles.post__text, theme === "dark" && styles.post__text__dark_theme)}>{post.body}</p>
			<div className={styles.post__footer}>
				<CommentList postId={post.id} />
			</div>
		</div>
	);
};
