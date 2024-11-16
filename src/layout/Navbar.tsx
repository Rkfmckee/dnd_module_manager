import {
	AppBar,
	Box,
	Button,
	Container,
	Toolbar,
	Typography,
} from "@mui/material";
import ThemeSelector, { ThemeProps } from "./ThemeSelector";
import { Link } from "react-router-dom";

const Navbar = ({ mode, setMode }: ThemeProps) => {
	return (
		<AppBar position="static" className="mb-4">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Link to="/" className="nav-link">
						<Typography
							variant="h6"
							component="span"
							sx={{ mr: 2 }}
						>
							D&D Module Manager
						</Typography>
					</Link>

					<Box
						sx={{
							flexGrow: 1,
							display: "flex",
						}}
					>
						<Link to="/module" className="nav-link">
							<Button color="inherit">Details</Button>
						</Link>
					</Box>

					<ThemeSelector mode={mode} setMode={setMode} />
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;
