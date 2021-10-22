import React from 'react';

const Button = ({
	children,
	className,
	onClick = undefined,
}) => {
	return (
		<button className={className} onClick={onclick}>
			{children}
		</button>
	);
};

export default Button;
