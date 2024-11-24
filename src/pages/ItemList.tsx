import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Items from "../assets/items.json";
import Row from "../components/table/Row";
import TablePaginationFooter from "../components/table/TablePaginationFooter";
import { ItemsSchema } from "../helpers/Schemas";

export default function ItemList() {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(0);

	const items = ItemsSchema.parse(Items);

	const currentItems = items.slice(
		page * rowsPerPage,
		page * rowsPerPage + rowsPerPage
	);

	return (
		<>
			<Typography variant="h1" gutterBottom>
				Items
			</Typography>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell width="20%">Type</TableCell>
							<TableCell width="20%">Rarity</TableCell>
							<TableCell width="10%">Attunement</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{currentItems.length > 0 ? (
							currentItems.map((item) => (
								<Row key={`item-${item.id}`} item={item} />
							))
						) : (
							<TableRow>
								<TableCell colSpan={4} className="text-center">
									No items available
								</TableCell>
							</TableRow>
						)}
					</TableBody>
					<TablePaginationFooter
						totalCount={items.length}
						onPageChange={(pageNum) => setPage(pageNum)}
						onRowsPerPageChange={(rowsPerPageNum) =>
							setRowsPerPage(rowsPerPageNum)
						}
					/>
				</Table>
			</TableContainer>
		</>
	);
}
