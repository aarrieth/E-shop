import React from 'react';
import ListItem from './ListItem';

const HiperLink = ({
	className = null,
	children,
	path = null,
}) => {
	return (
		<ListItem className={className}>
			<a href={path}>{children}</a>
		</ListItem>
	);
};

export default HiperLink;
