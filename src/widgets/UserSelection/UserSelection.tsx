import { useEffect } from "react";
import type { ChangeEvent } from "react";
import { useUser } from "@/shared/lib/user/useUser";
import { testDataUsers } from "@/shared/mocks/testDataUsers";
import styles from "./UserSelection.module.scss";
import { useNavigate } from "react-router-dom";

export const UserSelection = () => {
	const { setUser } = useUser();
	const users = testDataUsers;
	const navigate = useNavigate();

	useEffect(() => {
		setUser(users[0]);
	}, []);

	const handleChangeUser = (e: ChangeEvent<HTMLSelectElement>) => {
		const currentUser = users.find((user) => user.id === Number(e.target.value));
		if (currentUser) {
			setUser(currentUser);
			//изменение url
			const splitUrl = location.pathname.split("/").filter(Boolean);
			if (splitUrl[0] === "users" && splitUrl.length > 2) {
				const userUrl = splitUrl.slice(2).join("/");
				navigate(`/users/${currentUser.id}/${userUrl}`);
			}
		}
	};
	return (
		<select name="userSelection" id="userSelection" onChange={handleChangeUser} className={styles.userSelection}>
			{users.map((user) => (
				<option value={user.id} key={`userSelection-${user.id}`}>
					{user.userName}
				</option>
			))}
		</select>
	);
};
