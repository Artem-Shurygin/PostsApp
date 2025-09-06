import type { FC, ReactNode } from "react";
import Footer from "@/widgets/LayoutFooter/Footer";
import Header from "@/widgets/LayoutHeader/Header";

type MainLayoutProps = {
	children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default MainLayout;
