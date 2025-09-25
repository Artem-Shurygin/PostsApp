import type { ReactNode } from "react";
import styles from "./ItemList.module.scss";

type Item = {
	id: number;
	title?: string;
};
type ItemListProps<T extends Item> = {
	title?: string;
	items: T[];
	children: (item: T) => ReactNode;
};

export const ItemList = <T extends Item>({ title, items, children }: ItemListProps<T>) => {
	return (
		<div className={styles.item_list}>
			<h2 className={styles.item_list__title}>{title}</h2>
			{items.map((item) => (
				<div className={styles.item_list__item} key={item.id}>
					{children(item)}
				</div>
			))}
		</div>
	);
};
