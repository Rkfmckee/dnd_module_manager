import { ReactNode } from "react";

interface Props {
	style?: string;
	children: ReactNode;
	onClose: () => void;
}

const Alert = ({ style = "primary", children, onClose }: Props) => {
	return (
		<div
			className={`alert alert-${style} alert-dismissible fade show`}
			role="alert"
		>
			{children}
			<button
				type="button"
				className="close"
				data-dismiss="alert"
				aria-label="Close"
				onClick={onClose}
			>
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	);
};

export default Alert;
