import { Item } from "./Schemas";

export function getType(item: Item) {
	if (!item.subtype) return item.type;
	return `${item.type} (${item.subtype})`;
}
