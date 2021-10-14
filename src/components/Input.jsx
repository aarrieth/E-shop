import React from 'react';

const Input = ({
	type,
	id,
	placeholder = null,
	className,
}) => {
	return (
		<input
			type={type}
			id={id}
			placeholder={placeholder}
			className={className}
		/>
	);
};

export default Input;
