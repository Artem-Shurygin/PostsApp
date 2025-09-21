import clsx from "clsx";
import styles from "./HomePage.module.scss";
import { useTheme } from "@/shared/lib/theme/useTheme";
import { ItemList } from "@/shared/ui/ItemList/ItemList";
import { testDataPost } from "@/shared/mocks/testDataPost";
import { formatDate } from "@/utils/formatDate";

export const HomePage = ({}: {}) => {
	const { theme } = useTheme();
	return (
		<div className={`theme_outer_wrapper__${theme}`}>
			<div className={clsx("container", `theme_inner_wrapper__${theme}`)}>
				<ul className={styles.home__comments_list}>
					<li>Переход на страницу конкретного поста осуществляется по клику на заголовок данного поста.</li>
					<li>Переход на страницу альбома с фото осуществляется по клику на данный альбом в альбомах пользователя.</li>
				</ul>

				<ItemList
					title="ItemList"
					items={testDataPost}
					children={(post) => (
						<>
							<p>{post.text}</p>
							<p>{formatDate(post.date)}</p>
						</>
					)}
				/>
			</div>
		</div>
	);
};
