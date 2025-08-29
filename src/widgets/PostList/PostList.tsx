import React from "react";
import PostCard from "@/entities/post/ui/PostCard";
import CSSModules from "react-css-modules";
import styles from "./PostList.module.scss";
import testData from "@/testData.json";

function PostList() {
	return (
		<div styleName="backgrond">
			<div className="container" styleName="post-list">
				<h1 styleName="heading">Posts</h1>
				{testData.map((item) => (
					<PostCard key={item.id} id={item.id} title={item.title} text={item.text} date={item.date} />
				))}
			</div>
		</div>
	);
}

export default CSSModules(PostList, styles, { allowMultiple: true });
