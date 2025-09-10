import type { FC } from "react";
import { useParams } from "react-router-dom";

export const PostPage: FC = () => {
	const { id } = useParams();
	return (
		<div className="container">
			<p>Пост с id={id}</p>
		</div>
	)
};
