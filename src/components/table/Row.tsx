import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { Item } from "../../helpers/Schemas";
import parse from "html-react-parser";
import { Typography } from "@mui/material";

interface RowProps {
	item: Item;
}

export default function Row({ item }: RowProps) {
	const [open, setOpen] = useState(false);

	function getType() {
		if (!item.subtype) return item.type;
		return `${item.type} (${item.subtype})`;
	}

	return (
		<>
			<TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
				<TableCell component="th" scope="row">
					<Button onClick={() => setOpen(!open)}>{item.name}</Button>
				</TableCell>
				<TableCell>{getType()}</TableCell>
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
							<Typography
								variant="subtitle1"
								className="description-header"
								gutterBottom
							>
								<strong>Description:</strong>
							</Typography>
							{parse(item.description)}
							{item.curseDescription && (
								<>
									<br />
									<br />
									<div className="curse-box">
										<Typography
											variant="subtitle1"
											className="description-header"
											gutterBottom
										>
											<strong>
												<i>Curse:</i>
											</strong>
										</Typography>
										{parse(item.curseDescription)}
									</div>
								</>
							)}
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
}
