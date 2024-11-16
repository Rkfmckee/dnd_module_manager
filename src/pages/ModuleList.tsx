import ListGroup from "../components/ListGroup";
import Modules from "../assets/modules.json";

const ModuleList = () => {
	return (
		<>
			<ListGroup
				heading="Modules"
				items={Modules.map((module) =>
					module.subtitle == ""
						? `${module.title}`
						: `${module.title}: ${module.subtitle}`
				)}
				onSelectItem={(item) => console.log(item)}
			/>
		</>
	);
};

export default ModuleList;
