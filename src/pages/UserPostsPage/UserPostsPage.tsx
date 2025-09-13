import type { FC } from "react";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import styles from "./UserPostsPage.module.scss";
import { useTheme } from "@/shared/lib/theme/useTheme";
import { testDataPostWithComments } from "@/shared/mocks/testDataPostWithComments";
import { testDataUsers } from "@/shared/mocks/testDataUsers";
import { formatDate } from "@/utils/formatDate";
import { PostCard } from "@/entities/post/ui/PostCard/PostCard";

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
	const { theme } = useTheme();
	const { id: userId } = useParams();

	//Получение постов пользователя
	const posts: Post[] = useMemo(() => testDataPostWithComments, []);
	const users = useMemo(() => testDataUsers, []);
	const user = users.find((user) => user.id == Number(userId));
	const userPostsIds = user?.postsIds;
	const userPosts: Post[] = useMemo(() => posts.filter((post) => userPostsIds?.includes(post.id)?? false), [userPostsIds]);

	return (
		<div className={`theme_outer_wrapper__${theme}`}>
			<div className={clsx("container", `theme_inner_wrapper__${theme}`, styles.user_posts)}>
				<h2 className={styles.user_posts__title}>Ваши посты</h2>
				{userPosts.map((post: Post) => {
					return (
						<PostCard
							key={post.id}
							id={post.id}
							title={post.title}
							text={post.text}
							date={formatDate(post.date)}
							comments={post.comments}
						/>
					);
				})}
			</div>
		</div>
	);
};
