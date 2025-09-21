import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@/shared/lib/theme/useTheme";
import clsx from "clsx";
import styles from "./AlbumPage.module.scss";
import { useGetPhotoByAlbumIdQuery } from "@/entities/[entity]/api/photosApi";

export const AlbumPage: FC = () => {
	const { theme } = useTheme();
	const { albumId } = useParams();
	const { data: photos } = useGetPhotoByAlbumIdQuery(Number(albumId));
	return (
		<div className={`theme_outer_wrapper__${theme}`}>
			<div className={clsx("container", `theme_inner_wrapper__${theme}`)}>
				{photos && (
					<div className={styles.album__photos_list}>
						{photos.map((photo, index) => (
							<img key={`photo-${index}`} src={photo.url} alt={photo.title} />
						))}
					</div>
				)}
			</div>
		</div>
	);
};
