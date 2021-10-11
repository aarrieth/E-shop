import React from 'react';
import '../styles/TextForm.scss';
const TextForm = ({ children, className = undefined }) => {
	return (
		<>
			{className === 'tittle' ? (
				<h1 className={className}>{children}</h1>
			) : (
				<p className={className}>{children}</p>
			)}
		</>
	);
};

export default TextForm;
