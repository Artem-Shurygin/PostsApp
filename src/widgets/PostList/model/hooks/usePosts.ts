import { useState } from "react";
import { useTheme } from "@/shared/lib/theme/useTheme";
import { useGetPostsQuery } from "@/entities/posts/api/postsApi";
import type { Post } from "@/entities/posts/model/types";

export const usePosts = () => {
	const { theme } = useTheme();
	const { data, error, isLoading } = useGetPostsQuery();
	const [filteredData, setfilteredData] = useState<Post[] | null>(null);

	const handleDataFromFilter = (data: Post[] | null) => {
		setfilteredData(data);
	};

	return {
		theme,
		data,
		error,
		isLoading,
		filteredData,
		handleDataFromFilter,
	};
};
