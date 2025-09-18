import type { FC } from "react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./UserPostsPage.module.scss";
import { useTheme } from "@/shared/lib/theme/useTheme";
import { testDataPostWithComments } from "@/shared/mocks/testDataPostWithComments";
import { PostCard } from "@/entities/post/ui/PostCard/PostCard";
import { useUser } from "@/shared/lib/user/useUser";

type PostComment = {
	id: number;
	author: string;
	text: string;
	date: string;
};

type Post = {
	id: number;
	title: string;
	text: string;
	date: string;
	comments: PostComment[];
};

export const UserPostsPage: FC = () => {
	const { user } = useUser();
	const { theme } = useTheme();
	const [userPosts, setUserPosts] = useState<Post[]>([]);

	//Получение постов пользователя
	const posts: Post[] = testDataPostWithComments;
	useEffect(() => {
		const userPosts: Post[] = posts.filter((post) => user?.postsIds.includes(post.id));
		if (userPosts) setUserPosts(userPosts);
	}, [user]);

	return (
		<div className={`theme_outer_wrapper__${theme}`}>
			<div className={clsx("container", `theme_inner_wrapper__${theme}`, styles.user_posts)}>
				<h2 className={styles.user_posts__title}>Посты пользователя "{user?.userName}"</h2>
				{userPosts.map((post: Post) => {
					return <PostCard key={`postCard-${post.id}`} post={post} />;
				})}
			</div>
		</div>
	);
};
