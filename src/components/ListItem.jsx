import React from 'react';

const ListItem = ({ className = null, children }) => {
	return <li className={className}>{children}</li>;
};

export default ListItem;
