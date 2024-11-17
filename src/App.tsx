import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ModuleList from "./pages/ModuleList";
import ModuleDetails from "./pages/ModuleDetails";
import Layout from "./layout/Layout";
import NotFound from "./pages/status/NotFound";
import "./App.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path="" element={<ModuleList />} />
					<Route
						path="module/:moduleId"
						element={<ModuleDetails />}
					/>
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
