import { MouseEvent, useState } from "react";

function ModuleList() {
	let modules = [
		"Phandelver and Below: The Shattered Obelisk",
		"Tales from the Yawning Portal",
		"Dungeon of the Mad Mage",
		"Curse of Strahd",
	];

	const [selectedModuleIndex, setSelectedModuleIndex] = useState(-1);

	const noModulesFound =
		modules.length === 0 ? <p>No modules found</p> : null;

	const handleModuleClick = (
		module: string,
		index: number,
		event: MouseEvent
	) => {
		if (selectedModuleIndex != index) setSelectedModuleIndex(index);
		else setSelectedModuleIndex(-1);

		console.log(
			`${module} clicked (id: ${index}, x: ${event.clientX}, y: ${event.clientY})`
		);
	};

	return (
		// Empty tags are a shortcut for <Fragment></Fragment>
		// Components can only return one element,
		// so Fragments can group components without adding unneccessary divs
		<>
			<h1>Modules</h1>
			{noModulesFound}
			<ul className="list-group">
				{modules.map((module, index) => (
					<li
						key={`module-${index}`}
						className={`list-group-item ${
							index === selectedModuleIndex ? "active" : ""
						}`}
						onClick={(event) =>
							handleModuleClick(module, index, event)
						}
					>
						{module}
					</li>
				))}
			</ul>
		</>
	);
}

export default ModuleList;
