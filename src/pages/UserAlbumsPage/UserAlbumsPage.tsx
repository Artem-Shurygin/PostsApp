import type { FC } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./UserAlbumsPage.module.scss";
import { useTheme } from "@/shared/lib/theme/useTheme";
import { useUser } from "@/shared/lib/user/useUser";
import { useGetAlbumByUserIdQuery, type Album } from "@/entities/[entity]/api/albumsApi";

export const UserAlbumsPage: FC = () => {
	const { user } = useUser();
	const { theme } = useTheme();
	const { data: albums } = useGetAlbumByUserIdQuery(Number(user?.id));

	return (
		<div className={`theme_outer_wrapper__${theme}`}>
			<div className={clsx("container", `theme_inner_wrapper__${theme}`, styles.albums)}>
				<h2 className={styles.albums__title}>Альбомы пользователя "{user?.username}"</h2>
				<div className={styles.albums__list}>
					{albums?.map((album: Album) => (
						<NavLink to={`/albums/${album.id}/photos`} className={styles.albums__link} key={`album-${album.id}`}>
							{album.title}
						</NavLink>
					))}
				</div>
			</div>
		</div>
	);
};
