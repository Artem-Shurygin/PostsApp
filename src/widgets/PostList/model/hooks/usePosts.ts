import { useState } from "react";
import { useTheme } from "@/shared/lib/theme/useTheme";
import { useGetPostsQuery, type Post } from "@/entities/[entity]/api/postsApi";

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
