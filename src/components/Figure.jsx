import React from 'react';

const Figure = ({ src, alt, className = undefined }) => {
	return (
		<figure className={className}>
			<img src={src} alt={alt} />
		</figure>
	);
};

export default Figure;
