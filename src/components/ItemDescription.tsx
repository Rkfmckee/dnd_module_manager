import Typography from "@mui/material/Typography";
import parse from "html-react-parser";
import { Item } from "../helpers/Schemas";

interface ItemDescriptionProps {
	item: Item;
	hideHeadings?: boolean;
}

export default function ItemDescription({
	item,
	hideHeadings = false,
}: ItemDescriptionProps) {
	return (
		<>
			{!hideHeadings && (
				<Typography
					variant="subtitle1"
					className="description-header"
					gutterBottom
				>
					<strong>Description:</strong>
				</Typography>
			)}
			{parse(item.description)}
			{item.curseDescription && (
				<>
					<br />
					<br />
					<div className="curse-box">
						{!hideHeadings && (
							<Typography
								variant="subtitle1"
								className="description-header"
								gutterBottom
							>
								<strong>
									<i>Curse:</i>
								</strong>
							</Typography>
						)}
						{parse(item.curseDescription)}
					</div>
				</>
			)}
		</>
	);
}
