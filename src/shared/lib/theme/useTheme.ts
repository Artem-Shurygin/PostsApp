import React from "react";

type Theme = "light" | "dark";
type useTheme = { theme: Theme; setTheme: (theme: Theme) => void };
export const useTheme = React.createContext<useTheme>({} as useTheme);
