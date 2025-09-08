import type { FC, ReactNode } from "react";
import { Footer } from "@/widgets/LayoutFooter/Footer";
import { Header } from "@/widgets/LayoutHeader/Header";

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};
