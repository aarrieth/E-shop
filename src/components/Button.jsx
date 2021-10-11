import React from 'react';
import '../styles/Button.scss';

const Button = ({ type, value, className }) => {
	return (
		<input
			type={type}
			value={value}
			className={className}
		/>
	);
};

export default Button;
