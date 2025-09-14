import { testDataPostWithComments } from "@/shared/mocks/testDataPostWithComments";
import { useState } from "react";
import { useTheme } from "@/shared/lib/theme/useTheme";

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

export const usePosts = () => {
	const { theme } = useTheme();
	const data: Post[] = testDataPostWithComments;
	const [filteredData, setfilteredData] = useState(data);
	const handleDataFromFilter = (data: Post[]) => {
		setfilteredData(data);
	};
	return {
		theme,
		data,
		filteredData,
		handleDataFromFilter,
	};
};
