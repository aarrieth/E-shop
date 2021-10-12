import React from 'react';

const Label = ({
	forInputControl,
	children,
	className,
}) => {
	return (
		<label htmlFor={forInputControl} className={className}>
			{children}
		</label>
	);
};

export default Label;
