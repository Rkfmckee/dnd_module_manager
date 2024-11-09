import ListGroup from "../components/ListGroup";

const ModuleList = () => {
	let modules = [
		"Phandelver and Below: The Shattered Obelisk",
		"Tales from the Yawning Portal",
		"Dungeon of the Mad Mage",
		"Curse of Strahd",
	];

	return (
		<>
			<ListGroup
				heading="Modules"
				items={modules}
				onSelectItem={(item) => console.log(item)}
			/>
		</>
	);
};

export default ModuleList;
