import type { FC, ChangeEvent } from "react";
import { filterPostsByLength } from "@/features/PostLengthFilter/lib/filterByLength.ts";

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

type PostLengthFilterProps = {
	posts: Post[];
	onDataSend: (data: Post[]) => void;
};

export const PostLengthFilter: FC<PostLengthFilterProps> = ({ posts, onDataSend }) => {
	const handleСhangeFilter = (e: ChangeEvent<HTMLSelectElement>) => {
		const filteredPosts: Post[] = filterPostsByLength(posts, e.target.value);
		onDataSend(filteredPosts);
	};
	return (
		<select name="postsFilter" id="postsFilter" onChange={handleСhangeFilter}>
			<option value="unfiltered">Без фильтра</option>
			<option value="longTitlePosts">Длинный заголовок поста</option>
			<option value="shortTitlePosts">Короткий заголовок поста</option>
		</select>
	);
};
