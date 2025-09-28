import type { ChangeEvent } from "react";
import { filterPostsByLength } from "@/features/PostLengthFilter/lib/filterByLength.ts";
import styles from "./PostLengthFilter.module.scss";
import type { Post } from "@/entities/posts/model/types";

type PostLengthFilterProps = {
	posts: Post[];
	onDataSend: (data: Post[]) => void;
};

export const PostLengthFilter = ({ posts, onDataSend }: PostLengthFilterProps) => {
	const handleСhangeFilter = (e: ChangeEvent<HTMLSelectElement>) => {
		const filteredPosts: Post[] = filterPostsByLength(posts, e.target.value);
		onDataSend(filteredPosts);
	};
	return (
		<select name="postsFilter" id="postsFilter" onChange={handleСhangeFilter} className={styles.posts_filter}>
			<option value="unfiltered">Без фильтра</option>
			<option value="longTitlePosts">Длинный заголовок поста</option>
			<option value="shortTitlePosts">Короткий заголовок поста</option>
		</select>
	);
};
