import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Items from "../assets/items.json";
import { Item } from "../helpers/Types";

export default function ItemList() {
	return (
		<>
			<Typography variant="h1">Items</Typography>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="item-list">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Type</TableCell>
							<TableCell>Rarity</TableCell>
							<TableCell>Attunement</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{Items.map((item) => (
							<TableRow
								key={`item-${item.id}`}
								sx={{
									"&:last-child td, &:last-child th": {
										border: 0,
									},
								}}
							>
								<TableCell component="th" scope="row">
									{item.name}
								</TableCell>
								<TableCell>{getType(item)}</TableCell>
								<TableCell>{item.rarity}</TableCell>
								<TableCell>
									{item.requiresAttunement ? "Yes" : "No"}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

function getType(item: Item) {
	if (!item.subtype) return item.type;
	return `${item.type} (${item.subtype})`;
}
