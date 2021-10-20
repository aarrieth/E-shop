import React from 'react';

const Tittle = ({ className = undefined, children }) => {
	return <h1 className={className}>{children}</h1>;
};

export default Tittle;
