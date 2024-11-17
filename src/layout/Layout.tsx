import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { ThemeProvider } from "@emotion/react";
import { ThemeMode } from "./ThemeSelector";
import { useState } from "react";
import { createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { useMediaQuery } from "@mui/material";

const Layout = () => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const [mode, setMode] = useState<ThemeMode>("system");

	const themeToPalette = (themeMode: ThemeMode) => {
		if (themeMode == "dark" || themeMode == "light") return themeMode;
		if (themeMode == "system") {
			if (prefersDarkMode) return "dark";
			else return "light";
		}
	};

	const theme = createTheme({
		palette: {
			mode: themeToPalette(mode),
			white: {
				main: "#FFFFFF",
			},
		},
	});

	return (
		<>
			<ThemeProvider theme={theme}>
				<Navbar mode={mode} setMode={setMode} />
				<main>
					<Container maxWidth="xl">
						{/* Outlet will render all child Route components
						of the route which renders this component  */}
						<Outlet />
					</Container>
				</main>
			</ThemeProvider>
		</>
	);
};

export default Layout;
