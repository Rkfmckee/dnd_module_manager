import {
	DarkMode,
	DarkModeOutlined,
	LightMode,
	LightModeOutlined,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

export type ThemeMode = "light" | "dark" | "system";
export type ThemeModeNull = ThemeMode | null;
export type ThemeModeUndef = ThemeMode | undefined;

export interface ThemeProps {
	mode: ThemeMode;
	setMode: (item: ThemeMode) => void;
}

const ThemeSelector = ({ mode, setMode }: ThemeProps) => {
	// if (!mode) return null;

	const themeModes = [
		{
			name: "light",
			activeComponent: <LightMode />,
			inactiveComponent: <LightModeOutlined />,
		},
		{
			name: "dark",
			activeComponent: <DarkMode />,
			inactiveComponent: <DarkModeOutlined />,
		},
	];

	const setThemeMode = (item: ThemeMode) => {
		setMode(item);
		// console.log(item);
	};

	return (
		<>
			<Box>
				{themeModes.map((themeMode) => (
					<IconButton
						key={themeMode.name}
						aria-label={themeMode.name}
						onClick={() =>
							setThemeMode(themeMode.name as ThemeMode)
						}
						color="inherit"
					>
						{mode == themeMode.name
							? themeMode.activeComponent
							: themeMode.inactiveComponent}
					</IconButton>
				))}
			</Box>
		</>
	);
};

export default ThemeSelector;
