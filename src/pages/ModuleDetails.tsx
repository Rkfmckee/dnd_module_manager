import { useParams } from "react-router-dom";
import Modules from "../assets/modules.json";
import NotFound from "./status/NotFound";
import { Typography } from "@mui/material";
import { GetSubtitleElement } from "../helpers/ModuleHelpers";
import { ModuleSchema } from "../helpers/Schemas";

export default function ModuleDetails() {
	const { moduleId } = useParams();

	const moduleParse = ModuleSchema.safeParse(
		Modules.find((m) => moduleId != undefined && m.id == +moduleId)
	);
	const module = moduleParse.success ? moduleParse.data : null;
	if (!module) return <NotFound />;

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
		</>
	);
}
