import { MainLayout } from "@/shared/layouts/MainLayout";
import { PostListWithLoading } from "@/widgets/PostList/PostListWithLoading";

export const App = () => {
	return (
		<MainLayout>
			<PostListWithLoading />
		</MainLayout>
	);
};
