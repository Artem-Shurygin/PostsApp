import type { FC } from "react";
import { useParams } from "react-router-dom";

export const UserPostsPage: FC = () => {
	const { id } = useParams();
	return (
		<div className="container">
			<p>Посты пользователя с id={id}</p>
		</div>
	)
};