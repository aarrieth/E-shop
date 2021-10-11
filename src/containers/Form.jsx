import React from 'react';
import '../styles/Form.scss';

const Form = ({ children }) => {
	return (
		<>
			<form className="form">{children}</form>
		</>
	);
};

export default Form;
