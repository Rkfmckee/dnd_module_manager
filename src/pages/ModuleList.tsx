import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Modules from "../assets/modules.json";
import ModuleCard from "../components/ModuleCard";
import { ModulesSchema } from "../helpers/Schemas";

const ModuleList = () => {
	const modules = ModulesSchema.parse(Modules);

	return (
		<>
			<Typography gutterBottom variant="h1" component="div">
				Modules
			</Typography>

			<Grid container spacing={2}>
				{modules.map((module) => (
					<Grid key={`module-${module.id}`} size={4}>
						<ModuleCard module={module} />
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default ModuleList;
