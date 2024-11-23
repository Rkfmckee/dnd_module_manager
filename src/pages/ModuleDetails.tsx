import { useParams } from "react-router-dom";
import Modules from "../assets/modules.json";
import Items from "../assets/items.json";
import NotFound from "./status/NotFound";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { GetSubtitleElement } from "../helpers/ModuleHelpers";
import { ItemsSchema, ModuleSchema } from "../helpers/Schemas";
import ItemCard from "../components/ItemCard";

export default function ModuleDetails() {
	const { moduleId } = useParams();

	const moduleParse = ModuleSchema.safeParse(
		Modules.find((m) => moduleId != undefined && m.id == +moduleId)
	);
	const module = moduleParse.success ? moduleParse.data : null;
	if (!module) return <NotFound />;

	const itemsParse = ItemsSchema.safeParse(
		Items.filter((i) => moduleId != undefined && i.moduleId == +moduleId)
	);
	const items = itemsParse.success ? itemsParse.data : [];

	return (
		<>
			<div
				className="hero-image"
				style={{
					backgroundImage: `linear-gradient(to top, black 1rem, transparent 100%), url(${module.image})`,
				}}
			>
				<div className="hero-text">
					<Typography variant="h1">{module?.title}</Typography>
					{GetSubtitleElement(module, true)}
				</div>
			</div>

			<Typography variant="h4" gutterBottom className="mt-4">
				What is it?
			</Typography>
			<Typography variant="body1">{module?.details}</Typography>

			{items.length > 0 && (
				<>
					<Typography
						gutterBottom
						variant="h4"
						component="div"
						className="mt-5"
					>
						Items from this Module
					</Typography>

					<Grid container spacing={2}>
						{items.map((item) => (
							<Grid key={`module-${item.id}`} size={6}>
								<ItemCard item={item} />
							</Grid>
						))}
					</Grid>
				</>
			)}
		</>
	);
}
