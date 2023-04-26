import React from 'react';

type Props = {
	label: string;
	className: string;
	disabled: boolean;
	handleClick?: () => void;
};

const Button: React.FC<Props> = ({
	label,
	className,
	disabled,
	handleClick,
}) => {
	return (
		<button className={className} onClick={handleClick} disabled={disabled}>
			{label}
		</button>
	);
};

export default Button;
