import { useState } from "react";

interface Props {
	heading: string;
	items: string[];
	onSelectItem: (item: string) => void;
}

function ListGroup({ heading, items, onSelectItem }: Props) {
	const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

	const noItemsFound = items.length === 0 ? <p>No items found</p> : null;

	const handleItemClick = (index: number, item: string) => {
		if (selectedItemIndex != index) setSelectedItemIndex(index);
		else setSelectedItemIndex(-1);

		onSelectItem(item);
	};

	return (
		// Empty tags are a shortcut for <Fragment></Fragment>
		// Components can only return one element,
		// so Fragments can group components without adding unneccessary divs
		<>
			<h1>{heading}</h1>
			{noItemsFound}
			<ul className="list-group">
				{items.map((item, index) => (
					<li
						key={`${heading}-item-${index}`}
						className={`list-group-item ${
							index === selectedItemIndex ? "active" : ""
						}`}
						onClick={() => handleItemClick(index, item)}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
