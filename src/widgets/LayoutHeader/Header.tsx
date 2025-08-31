import { useState, useContext } from "react";
import Modal from "@/shared/ui/Modal/Modal";
import CSSModules from "react-css-modules";
import styles from "./Header.module.scss";
import ThemeSwitcher from "@/features/ThemeSwitcher/ui/ThemeSwitcher";
import { useTheme } from "@/shared/lib/theme/useTheme";

function Header() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { theme } = useContext(useTheme);

	return (
		<div styleName="wrapper" data-theme={theme}>
			<div styleName="header" className="container" data-theme={theme}>
				<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
					<p styleName="modal__title">Project info</p>
					<p styleName="modal__text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, quidem esse dicta dolorem debitis quaerat ut
						incidunt, molestiae blanditiis corrupti voluptatum minus, ullam enim similique fugiat. Nemo distinctio
						voluptatum voluptatem itaque et quas! Facere itaque minima odit assumenda nulla, error temporibus,
						consequatur illo ea sed totam amet officiis, quia voluptatum? Tenetur, magni. Fuga blanditiis reiciendis
						veritatis magni consequatur magnam ipsa voluptatibus perferendis, dignissimos modi repellat quibusdam,
						facere alias nam placeat eius, exercitationem aperiam hic saepe? Placeat distinctio, natus reprehenderit eum
						nulla repellat id nostrum possimus provident, atque sunt, perspiciatis labore inventore adipisci vitae ex?
						Numquam nam officiis quia officia enim.
					</p>
				</Modal>

				<h1 styleName="header__title" data-theme={theme}>
					Posts
				</h1>
				<div styleName="header__button-box">
					<button styleName="about" onClick={() => setIsModalOpen(true)} data-theme={theme}>
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
}

export default CSSModules(Header, styles, { allowMultiple: true });
