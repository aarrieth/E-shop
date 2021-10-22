import React from 'react';

const Input = ({
	type,
	id,
	name = undefined,
	placeholder = undefined,
	className,
}) => {
	return (
		<input
			type={type}
			id={id}
			name={name}
			placeholder={placeholder}
			className={className}
		/>
	);
};

export default Input;
