import React from 'react';
const Logo = ({ urlLogo, alt, className = undefined }) => {
	return (
		<img src={urlLogo} alt={alt} className={className} />
	);
};

export default Logo;
