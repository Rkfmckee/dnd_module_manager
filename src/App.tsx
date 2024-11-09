import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
	let modules = [
		"Phandelver and Below: The Shattered Obelisk",
		"Tales from the Yawning Portal",
		"Dungeon of the Mad Mage",
		"Curse of Strahd",
	];

	const [showAlert, setShowAlert] = useState(false);

	return (
		<div>
			<ListGroup
				heading="Modules"
				items={modules}
				onSelectItem={(item) => console.log(item)}
			/>

			{showAlert && (
				<Alert onClose={() => setShowAlert(false)}>Hello world!</Alert>
			)}

			<Button style="primary" onClick={() => setShowAlert(!showAlert)}>
				{`${showAlert ? "Hide" : "Show"} alert`}
			</Button>
		</div>
	);
}

export default App;
