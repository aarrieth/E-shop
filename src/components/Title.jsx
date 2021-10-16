import React from 'react';

const Title = ({ className = null, children }) => {
	return <h1 className={className}>{children}</h1>;
};

export default Title;
