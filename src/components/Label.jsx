import React from 'react';
import '../styles/Label.scss';

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
