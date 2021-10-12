import React from 'react';

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
