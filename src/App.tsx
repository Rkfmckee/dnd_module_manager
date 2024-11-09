import ListGroup from "./components/ListGroup";

function App() {
	let modules = [
		"Phandelver and Below: The Shattered Obelisk",
		"Tales from the Yawning Portal",
		"Dungeon of the Mad Mage",
		"Curse of Strahd",
	];

	return (
		<div>
			<ListGroup
				heading="Modules"
				items={modules}
				onSelectItem={(item) => console.log(item)}
			/>
		</div>
	);
}

export default App;
