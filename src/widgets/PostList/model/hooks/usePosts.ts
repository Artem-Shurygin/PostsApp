import { useState } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "@/shared/lib/theme/useTheme";
import { useGetPostsQuery } from "@/entities/posts/api/postsApi";
import type { Post } from "@/entities/posts/model/types";
import { selectAllPosts } from "@/entities/posts/model/slice/postsSelectors";

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
