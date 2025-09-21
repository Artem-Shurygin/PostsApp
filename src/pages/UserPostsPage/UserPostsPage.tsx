import type { FC } from "react";
import clsx from "clsx";
import styles from "./UserPostsPage.module.scss";
import { useTheme } from "@/shared/lib/theme/useTheme";
import { PostCard } from "@/entities/post/ui/PostCard/PostCard";
import { useUser } from "@/shared/lib/user/useUser";
import { useGetPostByUserIdQuery, type Post } from "@/entities/[entity]/api/postsApi";

export const UserPostsPage: FC = () => {
	const { user } = useUser();
	const { theme } = useTheme();
		const { data: posts } = useGetPostByUserIdQuery(Number(user?.id));
	return (
		<div className={`theme_outer_wrapper__${theme}`}>
			<div className={clsx("container", `theme_inner_wrapper__${theme}`, styles.user_posts)}>
				<h2 className={styles.user_posts__title}>Посты пользователя "{user?.username}"</h2>
				{posts?.map((post: Post) => {
					return <PostCard key={`postCard-${post.id}`} post={post} />;
				})}
			</div>
		</div>
	);
};
