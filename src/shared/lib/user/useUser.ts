import { useContext } from "react";
import { UserContext } from "@/shared/lib/user/UserContext";

export const useUser = () => useContext(UserContext);
