import type { FC } from "react";
import { useParams } from "react-router-dom";

export const AlbumPage: FC = () => {
	const { id } = useParams();
	return (
		<div className="container">
			<p>Фото альбома с id={id}</p>
		</div>
	);
};
