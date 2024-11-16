import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Module } from "../models/Module";

interface ModuleCardParams {
	module: Module;
}

function getSubtitleElement(module: Module) {
	if (module.subtitle)
		return (
			<Typography variant="subtitle1" component="div">
				{module.subtitle}
			</Typography>
		);
	else return "";
}

export default function ModuleCard({ module }: ModuleCardParams) {
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
					{getSubtitleElement(module)}
				</div>

				<Typography variant="body2" sx={{ color: "text.secondary" }}>
					{module.details}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">View more</Button>
			</CardActions>
		</Card>
	);
}
