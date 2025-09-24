import styles from "./UserPostsPage.module.scss";
import { PostCard } from "@/entities/post/ui/PostCard/PostCard";
import { useUser } from "@/shared/lib/user/useUser";
import { useGetPostByUserIdQuery } from "@/entities/[entity]/api/postsApi";
import type { Post } from "@/entities/[entity]/model/types";
import { AsyncWrapper } from "@/widgets/AsyncWrapper/AsyncWrapper";
import { ThemeWrapper } from "@/widgets/ThemeWrapper/ThemeWrapper";

export const UserPostsPage = ({}: {}) => {
	const { user } = useUser();
	const { data: posts, isLoading, error } = useGetPostByUserIdQuery(Number(user?.id));
	return (
		<ThemeWrapper innerStyles={[styles.user_posts]}>
			<AsyncWrapper isLoading={isLoading} error={error}>
				<h2 className={styles.user_posts__title}>Посты пользователя "{user?.username}"</h2>
				{posts?.map((post: Post) => {
					return <PostCard key={`postCard-${post.id}`} post={post} />;
				})}
			</AsyncWrapper>
		</ThemeWrapper>
	);
};
