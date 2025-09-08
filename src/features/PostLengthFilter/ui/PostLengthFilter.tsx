import type { ChangeEvent } from "react";

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

const PostLengthFilter = ({ posts, onDataSend }: any) => {
	let filteredPosts: Post[] = [];

	const handleСhangeFilter = (e: ChangeEvent<HTMLSelectElement>) => {
		switch (e.target.value) {
			case "shortTitlePosts":
				//короткий заголовок
				filteredPosts = Object.values(posts).sort(
					(a, b) => (a as Post).title.length - (b as Post).title.length
				) as Post[];
				onDataSend(filteredPosts);
				break;
			case "longTitlePosts":
				//длинный заголовок
				filteredPosts = Object.values(posts).sort(
					(a, b) => (b as Post).title.length - (a as Post).title.length
				) as Post[];
				onDataSend(filteredPosts);
				break;
			default:
				onDataSend(posts);
				break;
		}
	};

	return (
		<select name="postsFilter" id="postsFilter" onChange={handleСhangeFilter}>
			<option value="unfiltered">Без фильтра</option>
			<option value="longTitlePosts">Длинный заголовок поста</option>
			<option value="shortTitlePosts">Короткий заголовок поста</option>
		</select>
	);
};

export default PostLengthFilter;
