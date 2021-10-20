import React from 'react';

const ListItem = ({
	className = null,
	children,
	onClick = undefined,
}) => {
	return (
		<li className={className} onClick={onClick}>
			{children}
		</li>
	);
};

export default ListItem;
