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
			<h3 className={styles.item_list__title}>{title}</h3>
			{items.map((item) => (
				<div className={styles.item_list__item} key={item.id}>
					<p className={styles.item_list__item_title}>{item.title}</p>
					{children(item)}
				</div>
			))}
		</div>
	);
};
