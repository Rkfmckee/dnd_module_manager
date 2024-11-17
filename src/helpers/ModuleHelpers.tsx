import Typography from "@mui/material/Typography";
import { Module } from "./Types";

export function GetSubtitleElement(module: Module, isHeader = false) {
	if (module.subtitle)
		return (
			<Typography variant={isHeader ? "h3" : "subtitle1"} component="div">
				{module.subtitle}
			</Typography>
		);
	else return "";
}
