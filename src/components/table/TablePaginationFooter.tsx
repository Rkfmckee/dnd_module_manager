import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import { TablePaginationActionsProps } from "@mui/material/TablePagination/TablePaginationActions";
import TableRow from "@mui/material/TableRow";
import { ChangeEvent, useState } from "react";

interface TablePaginationFooterProps {
	totalCount: number;
	onPageChange: (pageNum: number) => void;
	onRowsPerPageChange: (rowsPerPageNum: number) => void;
}

export default function TablePaginationFooter(
	props: TablePaginationFooterProps
) {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	props.onPageChange(page);
	props.onRowsPerPageChange(rowsPerPage);

	function handleOnPageChange(
		_: React.MouseEvent<HTMLButtonElement> | null,
		page: number
	) {
		setPage(page);
		props.onPageChange(page);
	}

	function handleOnRowsPerPageChange(
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const rowsPerPageNum = parseInt(event.target.value, 10);
		setRowsPerPage(rowsPerPageNum);
		setPage(0);
		props.onRowsPerPageChange(rowsPerPageNum);
	}

	return (
		<TableFooter>
			<TableRow>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					count={props.totalCount}
					rowsPerPage={rowsPerPage}
					page={page}
					slotProps={{
						select: {
							inputProps: {
								"aria-label": "rows per page",
							},
							native: true,
						},
					}}
					onPageChange={handleOnPageChange}
					onRowsPerPageChange={handleOnRowsPerPageChange}
					ActionsComponent={TablePaginationActions}
				/>
			</TableRow>
		</TableFooter>
	);
}

function TablePaginationActions(props: TablePaginationActionsProps) {
	const theme = useTheme();
	const { count, page, rowsPerPage, onPageChange } = props;

	const handleFirstPageButtonClick = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		onPageChange(event, 0);
	};

	const handleBackButtonClick = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		onPageChange(event, page - 1);
	};

	const handleNextButtonClick = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		onPageChange(event, page + 1);
	};

	const handleLastPageButtonClick = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
	};

	return (
		<Box sx={{ flexShrink: 0, ml: 2.5 }}>
			<IconButton
				onClick={handleFirstPageButtonClick}
				disabled={page === 0}
				aria-label="first page"
			>
				{theme.direction === "rtl" ? (
					<LastPageIcon />
				) : (
					<FirstPageIcon />
				)}
			</IconButton>
			<IconButton
				onClick={handleBackButtonClick}
				disabled={page === 0}
				aria-label="previous page"
			>
				{theme.direction === "rtl" ? (
					<KeyboardArrowRight />
				) : (
					<KeyboardArrowLeft />
				)}
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="next page"
			>
				{theme.direction === "rtl" ? (
					<KeyboardArrowLeft />
				) : (
					<KeyboardArrowRight />
				)}
			</IconButton>
			<IconButton
				onClick={handleLastPageButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="last page"
			>
				{theme.direction === "rtl" ? (
					<FirstPageIcon />
				) : (
					<LastPageIcon />
				)}
			</IconButton>
		</Box>
	);
}
