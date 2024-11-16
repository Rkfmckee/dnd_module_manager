import Typography from "@mui/material/Typography";
import Modules from "../assets/modules.json";
import ModuleCard from "../components/ModuleCard";
import Grid from "@mui/material/Grid2";

const ModuleList = () => {
	return (
		<>
			<Typography gutterBottom variant="h2" component="div">
				Modules
			</Typography>

			<Grid container spacing={2}>
				{Modules.map((module) => (
					<Grid key={`module-${module.id}`} size={4}>
						<ModuleCard module={module} />
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default ModuleList;
