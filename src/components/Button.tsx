interface Props {
	style?: "primary" | "secondary" | "info" | "warning" | "danger";
	children: string;
	onClick: () => void;
}

const Button = ({ style = "primary", children, onClick }: Props) => {
	return (
		<button type="button" className={`btn btn-${style}`} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
