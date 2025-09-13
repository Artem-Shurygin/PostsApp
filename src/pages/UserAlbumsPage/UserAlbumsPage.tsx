import type { FC } from "react";
import { useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";
import clsx from "clsx";
import styles from "./UserAlbumsPage.module.scss";
import { useTheme } from "@/shared/lib/theme/useTheme";
import { testDataUsers } from "@/shared/mocks/testDataUsers";
import { testDataAlbums } from "@/shared/mocks/testDataAlbums";

export const UserAlbumsPage: FC = () => {
	const { theme } = useTheme();
	const { id: userId } = useParams();

	//Получение альбомов пользователя
	const users = useMemo(() => testDataUsers, []);
	const albums = useMemo(() => testDataAlbums, []);
	const user = users.find((user) => user.id == Number(userId));
	const userAlbumsIds = user?.albumsIds;
	const userAlbums = useMemo(
		() => albums.filter((album) => userAlbumsIds?.includes(album.id) ?? false),
		[userAlbumsIds]
	);

	return (
		<div className={`theme_outer_wrapper__${theme}`}>
			<div className={clsx("container", `theme_inner_wrapper__${theme}`, styles.albums)}>
				<h2 className={styles.albums__title}>Ваши альбомы</h2>
				<div className={styles.albums__list}>
					{userAlbums?.map((album) => (
						<NavLink to={`/albums/${album.id}/photos`} className={styles.albums__link} key={`album-${album.id}`}>
							{album.title}
						</NavLink>
					))}
				</div>
			</div>
		</div>
	);
};
