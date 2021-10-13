import React from 'react';

const UnorderedList = ({ className = null, children }) => {
	return <ul className={className}>{children}</ul>;
};

export default UnorderedList;
