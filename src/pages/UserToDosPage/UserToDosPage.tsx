import type { FC } from "react";
import { useParams } from "react-router-dom";

export const UserToDosPage: FC = () => {
	const { id } = useParams();
	return (
		<div className="container">
			<p>Задачи пользователя с id={id}</p>
		</div>
	)
};