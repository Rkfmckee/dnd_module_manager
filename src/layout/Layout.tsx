import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
	return (
		<>
			<Navbar />
			<main className="container">
				{/* Outlet will render all child Route components
				of the route which renders this component */}
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
