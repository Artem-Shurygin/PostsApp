import { Provider } from "react-redux";
import type { PropsWithChildren } from "react";
import { store } from "./store";

export const StoreProvider = ({ children }: PropsWithChildren) => {
	return <Provider store={store}>{children}</Provider>;
};
