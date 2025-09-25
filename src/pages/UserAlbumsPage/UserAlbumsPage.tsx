import { NavLink } from "react-router-dom";
import styles from "./UserAlbumsPage.module.scss";
import { useUser } from "@/shared/lib/user/useUser";
import { useGetAlbumByUserIdQuery } from "@/entities/album/api/albumsApi";
import { AsyncWrapper } from "@/widgets/AsyncWrapper/AsyncWrapper";
import { ThemeWrapper } from "@/widgets/ThemeWrapper/ThemeWrapper";
import { ItemList } from "@/shared/ui/ItemList/ItemList";

export const UserAlbumsPage = () => {
	const { user } = useUser();
	const { data: albums, isLoading, error } = useGetAlbumByUserIdQuery(Number(user?.id));

	return (
		<ThemeWrapper innerStyles={[styles.albums]}>
			<AsyncWrapper isLoading={isLoading} error={error}>
				{albums && (
					<ItemList
						title={`Альбомы пользователя "${user?.username}"`}
						items={albums}
						children={(album) => (
							<NavLink to={`/albums/${album.id}/photos`} className={styles.albums__link} key={`album-${album.id}`}>
								{album.title}
							</NavLink>
						)}
					/>
				)}
			</AsyncWrapper>
		</ThemeWrapper>
	);
};
