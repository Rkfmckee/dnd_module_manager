import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ModuleList from "./pages/ModuleList";
import ModuleDetails from "./pages/ModuleDetails";
import Layout from "./layout/Layout";

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<ModuleList />} />
					<Route path="/module" element={<ModuleDetails />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
