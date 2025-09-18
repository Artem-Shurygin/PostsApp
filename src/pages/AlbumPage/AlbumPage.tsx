import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@/shared/lib/theme/useTheme";
import clsx from "clsx";
import styles from "./AlbumPage.module.scss";
import { testDataAlbums } from "@/shared/mocks/testDataAlbums";

export const AlbumPage: FC = () => {
	const { theme } = useTheme();
	const { albumId } = useParams();

	//Получение альбома
	const albums = testDataAlbums;
	const currentAlbum = albums.find((albums) => albums.id == Number(albumId));

	return (
		<div className={`theme_outer_wrapper__${theme}`}>
			<div className={clsx("container", `theme_inner_wrapper__${theme}`)}>
				<h2 className={styles.album__title}>
					Альбом {currentAlbum ? `"${currentAlbum.title}" пользователя ${currentAlbum.author} ` : "отсутствует"}
				</h2>
				{currentAlbum && (
					<div className={styles.album__photos_list}>
						{currentAlbum.photos.map((photo, index) => (
							<p key={`photo-${index}`}>{photo}</p>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
