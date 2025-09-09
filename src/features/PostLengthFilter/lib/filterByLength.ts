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

export const filterPostsByLength = (filteredData: Post[], filterValue: string): Post[] => {
	console.log(filterValue);
	console.log(filteredData);
	switch (filterValue) {
		case "shortTitlePosts":
			return Object.values(filteredData).sort((a, b) => (a as Post).title.length - (b as Post).title.length) as Post[];
		case "longTitlePosts":
			return Object.values(filteredData).sort((a, b) => (b as Post).title.length - (a as Post).title.length) as Post[];
		default:
			return filteredData;
	}
};
