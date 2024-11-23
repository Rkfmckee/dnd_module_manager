import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { GetSubtitleElement } from "../helpers/ModuleHelpers";
import { Link } from "react-router-dom";
import { Module } from "../helpers/Schemas";

interface ModuleCardProps {
	module: Module;
}

export default function ModuleCard({ module }: ModuleCardProps) {
	return (
		<Card>
			<CardMedia
				sx={{ height: 250 }}
				image={module.image}
				title="module image"
			/>
			<CardContent>
				<div className="mb-3">
					<Typography variant="h5" component="div">
						{module.title}
					</Typography>
					{GetSubtitleElement(module)}
				</div>

				<Typography variant="body2" sx={{ color: "text.secondary" }}>
					{module.details}
				</Typography>
			</CardContent>
			<CardActions>
				<Button component={Link} to={`module/${module.id}`}>
					View more
				</Button>
			</CardActions>
		</Card>
	);
}
