import { useState } from "react";
import { useTheme } from "@/shared/lib/theme/useTheme";
import { useGetPostsQuery, type Post } from "@/entities/posts/api/postsApi";
import { selectAllPosts } from "@/entities/posts/model/slice/postsSelectors";
import { useSelector } from "react-redux";

export const usePosts = () => {
	const { theme } = useTheme();
	const { data, error, isLoading } = useGetPostsQuery();
	const [filteredData, setfilteredData] = useState<Post[] | null>(null);
	const storedPosts = useSelector(selectAllPosts);
	const handleDataFromFilter = (data: Post[] | null) => {
		setfilteredData(data);
	};

	return {
		theme,
		data,
		storedPosts,
		error,
		isLoading,
		filteredData,
		handleDataFromFilter,
	};
};
