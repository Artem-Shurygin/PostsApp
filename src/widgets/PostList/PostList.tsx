import PostCard from "@/entities/post/ui/PostCard/PostCard";
import CSSModules from "react-css-modules";
import styles from "./PostList.module.scss";
import testData from "@/testData";
import formatDate from "@/utils/formatDate"

type Post = {
	id: number;
	title: string;
	text: string;
	date: string;
};

function PostList() {
	const data = JSON.parse(testData);

	const dataSortedByNovelty: Array<any> = Object.values(data).sort((a: any, b: any) => b.id - a.id);

	return (
		<div styleName="backgrond">
			<div className="container" styleName="post-list">
				<h1 styleName="heading">Posts</h1>
				{dataSortedByNovelty.map((post: Post) => {
					console.log(typeof post.date);
					return (
						<PostCard key={post.id} id={post.id} title={post.title} text={post.text} date={formatDate(post.date)} />
					);
				})}
			</div>
		</div>
	);
}

export default CSSModules(PostList, styles, { allowMultiple: true });
