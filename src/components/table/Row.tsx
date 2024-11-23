import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { getType } from "../../helpers/ItemHelpers";
import { Item } from "../../helpers/Schemas";
import ItemDescription from "../ItemDescription";

interface RowProps {
	item: Item;
}

export default function Row({ item }: RowProps) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
				<TableCell component="th" scope="row">
					<Button onClick={() => setOpen(!open)}>{item.name}</Button>
				</TableCell>
				<TableCell>{getType(item)}</TableCell>
				<TableCell>{item.rarity}</TableCell>
				<TableCell>{item.requiresAttunement ? "Yes" : "No"}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell
					style={{ paddingBottom: 0, paddingTop: 0 }}
					colSpan={6}
				>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<ItemDescription item={item} />
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
}
