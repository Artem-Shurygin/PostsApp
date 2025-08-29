import React from "react";
import CSSModules from "react-css-modules";
import styles from "./PostCard.module.scss";

function PostCard({ title, text, date }: any) {
	return (
		<div styleName="post">
			<p styleName="post__title">{title}</p>
			<p styleName="post__text">{text}</p>
			<p styleName="post__date">{date}</p>
		</div>
	);
}

export default CSSModules(PostCard, styles, { allowMultiple: true });
