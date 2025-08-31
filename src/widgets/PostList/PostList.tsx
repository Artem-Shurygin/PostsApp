import { useContext } from "react";
import PostCard from "@/entities/post/ui/PostCard";
import CSSModules from "react-css-modules";
import styles from "./PostList.module.scss";
import testData from "@/testData.json";
import { useTheme } from "@/shared/lib/theme/useTheme";

function PostList() {
	const { theme } = useContext(useTheme);
	return (
		<div styleName="backgrond" data-theme={theme}>
			<div className="container" styleName="post-list" data-theme={theme}>
				{testData.map((post) => (
					<PostCard key={post.id} id={post.id} title={post.title} text={post.text} date={post.date} />
				))}
			</div>
		</div>
	);
}

export default CSSModules(PostList, styles, { allowMultiple: true });
