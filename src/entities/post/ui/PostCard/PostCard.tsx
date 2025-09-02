import { useContext } from "react";
import CSSModules from "react-css-modules";
import styles from "./PostCard.module.scss";
import { useTheme } from "@/shared/lib/theme/useTheme";

function PostCard({ title, text, date }: any) {
		const { theme } = useContext(useTheme);
	return (
		<div styleName="post" data-theme={theme}>
			<p styleName="post__title" data-theme={theme}>{title}</p>
			<p styleName="post__text" data-theme={theme}>{text}</p>
			<p styleName="post__date" data-theme={theme}>{date}</p>
		</div>
	);
}

export default CSSModules(PostCard, styles, { allowMultiple: true });
