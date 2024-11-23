import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { getType } from "../helpers/ItemHelpers";
import { Item } from "../helpers/Schemas";
import ItemDescription from "./ItemDescription";
import Button from "@mui/material/Button";
import { useState } from "react";

interface ItemCardProps {
	item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
	const [showDescription, setShowDescription] = useState(false);

	return (
		<Card>
			<CardContent>
				<Typography variant="h5" component="div">
					{item.name}
				</Typography>

				<Typography
					variant="subtitle1"
					sx={{ color: "text.secondary" }}
				>
					{getType(item)}, {item.rarity}
					{item.requiresAttunement ? (
						<i> (requires attunement)</i>
					) : null}
				</Typography>

				<Button onClick={() => setShowDescription(!showDescription)}>
					{showDescription ? "Hide" : "Show"} description
				</Button>

				{showDescription && (
					<div className="mt-2">
						<ItemDescription item={item} hideHeadings />
					</div>
				)}
			</CardContent>
		</Card>
	);
}
