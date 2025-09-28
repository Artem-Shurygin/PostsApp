import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { App } from "./App/App.tsx";
import { ThemeProvider } from "@/shared/lib/theme/ThemeProvider.tsx";
import { UserProvider } from "./shared/lib/user/UserProvider.tsx";
import { StoreProvider } from "./App/providers/store/StoreProvider.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<StoreProvider>
			<UserProvider>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</UserProvider>
		</StoreProvider>
	</StrictMode>
);
