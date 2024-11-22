import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function About() {
	return (
		<>
			<Typography variant="h1" gutterBottom>
				About
			</Typography>
			<Typography variant="body1">
				A React application written following
				<Button
					component={Link}
					to="https://www.youtube.com/watch?v=SqcY0GlETPk"
				>
					Programming with Mosh
				</Button>
			</Typography>
		</>
	);
}
