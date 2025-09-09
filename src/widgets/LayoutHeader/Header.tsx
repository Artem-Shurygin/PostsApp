import { useState } from "react";
import clsx from "clsx";
import { Modal } from "@/shared/ui/Modal/Modal";
import styles from "./Header.module.scss";
import { ThemeSwitcher } from "@/features/ThemeSwitcher/ui/ThemeSwitcher";
import { useTheme } from "@/shared/lib/theme/useTheme";

export const Header = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { theme } = useTheme();
	const handleCloseModal = () => setIsModalOpen(false);
	const handleOpenModal = () => setIsModalOpen(true);
	return (
		<div className={clsx(theme === "dark" && styles.wrapper__dark_theme)}>
			<div className={clsx("container", styles.header, theme === "dark" && styles.header__dark_theme)}>
				<Modal isOpen={isModalOpen} onClose={handleCloseModal}>
					<Modal.Header>
						<h2>Project info</h2>
					</Modal.Header>
					<Modal.Body>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque exercitationem commodi odio
							possimus accusamus sequi a consectetur, aliquam magnam laudantium libero debitis asperiores iure
							praesentium officia nam minus vero quo repudiandae quidem excepturi aspernatur. Nemo labore fuga
							temporibus quisquam unde cupiditate blanditiis tempora error dolorem amet dolorum vitae sit laborum, atque
							quos, a natus quaerat at iure et commodi aperiam, velit ducimus! Atque fugiat mollitia officiis, deserunt
							dolorem minus facilis autem rerum veritatis non dolorum dignissimos dicta error labore delectus enim earum
							id maiores beatae magnam consequatur. Vel, cum adipisci? Nam, quo itaque ex quae illo id assumenda non!
						</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo laudantium maiores incidunt temporibus
							possimus architecto repudiandae accusantium inventore quibusdam dolorum recusandae odio asperiores quos
							reprehenderit dignissimos iure praesentium, aliquid placeat.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, reiciendis sed. Ex sit eveniet iusto
							error sunt, officiis tempore illo accusantium ab facere, nihil repudiandae?
						</p>
					</Modal.Body>
					<Modal.Footer>
						<a href="#">more info</a>
					</Modal.Footer>
				</Modal>
				<h1 className={styles.header__title}>Posts</h1>
				<div className={styles.header__button_box}>
					<button
						className={clsx(styles.header__modal_btn, theme === "dark" && styles.header__modal_btn__dark_theme)}
						onClick={handleOpenModal}
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
							<path d="M64 1C29.3 1 1 29.3 1 64s28.3 63 63 63 63-28.3 63-63S98.7 1 64 1zm0 118C33.7 119 9 94.3 9 64S33.7 9 64 9s55 24.7 55 55-24.7 55-55 55z" />
							<path d="M60 54.5h8v40h-8zM60 35.5h8v8h-8z" />
						</svg>
					</button>
					<ThemeSwitcher />
				</div>
			</div>
		</div>
	);
};
