import type { FC } from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./UserAlbumsPage.module.scss"
import clsx from "clsx";

export const UserAlbumsPage: FC = () => {
	const { id } = useParams();
	return (
		<div className= {clsx("container", styles.albums)}>
			<p>Альбомы пользователя с id={id}:</p>
			<NavLink to="/albums/0/photos">Альбом с id=0</NavLink>
			<NavLink to="/albums/1/photos">Альбом с id=1</NavLink>
			<NavLink to="/albums/2/photos">Альбом с id=2</NavLink>
		</div>
	);
};
