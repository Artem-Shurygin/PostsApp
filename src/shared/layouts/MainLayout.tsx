import type { FC } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "@/widgets/LayoutFooter/Footer";
import { Header } from "@/widgets/LayoutHeader/Header";

export const MainLayout: FC = () => {
	return (
		<div className="main_layout">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};
