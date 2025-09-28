import type { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./UserAlbumsPage.module.scss";
import { useUser } from "@/shared/lib/user/useUser";
import { useGetAlbumByUserIdQuery, type Album } from "@/entities/albums/api/albumsApi";
import { AsyncWrapper } from "@/widgets/AsyncWrapper/AsyncWrapper";
import { ThemeWrapper } from "@/widgets/ThemeWrapper/ThemeWrapper";

export const UserAlbumsPage: FC = () => {
	const { user } = useUser();
	const { data: albums, isLoading, error } = useGetAlbumByUserIdQuery(Number(user?.id));

	return (
		<ThemeWrapper innerStyles={[styles.albums]}>
			<AsyncWrapper isLoading={isLoading} error={error}>
				<h2 className={styles.albums__title}>Альбомы пользователя "{user?.username}"</h2>
				<div className={styles.albums__list}>
					{albums?.map((album: Album) => (
						<NavLink to={`/albums/${album.id}/photos`} className={styles.albums__link} key={`album-${album.id}`}>
							{album.title}
						</NavLink>
					))}
				</div>
			</AsyncWrapper>
		</ThemeWrapper>
	);
};
