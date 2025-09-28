import { useParams } from "react-router-dom";
import styles from "./AlbumPage.module.scss";
import { useGetPhotoByAlbumIdQuery } from "@/entities/photos/api/photosApi";
import { AsyncWrapper } from "@/widgets/AsyncWrapper/AsyncWrapper";
import { ThemeWrapper } from "@/widgets/ThemeWrapper/ThemeWrapper";

export const AlbumPage = () => {
	const { albumId } = useParams();
	const { data: photos, isLoading, error } = useGetPhotoByAlbumIdQuery(Number(albumId));
	return (
		<ThemeWrapper>
			<AsyncWrapper isLoading={isLoading} error={error}>
				{photos && (
					<div className={styles.album__photos_list}>
						{photos.map((photo, index) => (
							<img key={`photo-${index}`} src={photo.url} alt={photo.title} />
						))}
					</div>
				)}
			</AsyncWrapper>
		</ThemeWrapper>
	);
};
