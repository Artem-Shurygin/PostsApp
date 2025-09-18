import type { FC } from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./UserAlbumsPage.module.scss";
import { useTheme } from "@/shared/lib/theme/useTheme";
import { testDataAlbums } from "@/shared/mocks/testDataAlbums";
import { useUser } from "@/shared/lib/user/useUser";

type Album = {
	id: number;
	author: string;
	title: string;
	photos: string[];
};

export const UserAlbumsPage: FC = () => {
	const { user } = useUser();
	const { theme } = useTheme();
	const [userAlbums, setUserAlbums] = useState<Album[]>([]);

	//Получение альбомов пользователя
	const albums = testDataAlbums;
	useEffect(() => {
		const userAlbums = albums.filter((album) => user?.albumsIds.includes(album.id));
		if (userAlbums) setUserAlbums(userAlbums);
	}, [user]);

	return (
		<div className={`theme_outer_wrapper__${theme}`}>
			<div className={clsx("container", `theme_inner_wrapper__${theme}`, styles.albums)}>
				<h2 className={styles.albums__title}>Альбомы пользователя "{user?.userName}"</h2>
				<div className={styles.albums__list}>
					{userAlbums.map((album) => (
						<NavLink to={`/albums/${album.id}/photos`} className={styles.albums__link} key={`album-${album.id}`}>
							{album.title}
						</NavLink>
					))}
				</div>
			</div>
		</div>
	);
};
