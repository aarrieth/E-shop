import React from 'react';

const Layout = ({ children, className = undefined }) => {
	return <div className={className}>{children}</div>;
};

export default Layout;
