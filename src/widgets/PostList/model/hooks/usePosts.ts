import { useEffect, useState } from "react";
import { useTheme } from "@/shared/lib/theme/useTheme";
import { useGetPostsQuery } from "@/entities/[entity]/api/postsApi";
import type { Post } from "@/entities/[entity]/model/types";

export const usePosts = () => {
	const { theme } = useTheme();
	const { data, error, isLoading } = useGetPostsQuery();
	const [filteredData, setfilteredData] = useState<Post[] | null>(null);

	const handleDataFromFilter = (data: Post[] | null) => {
		setfilteredData(data);
	};

	useEffect(() => {
		if (data) setfilteredData(data);
	}, [data]);

	return {
		theme,
		data,
		error,
		isLoading,
		filteredData,
		handleDataFromFilter,
	};
};
