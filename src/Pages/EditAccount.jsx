import React from 'react';

//components and containers
import Layout from '../containers/Layout';
import TextForm from '../containers/TextForm';
import Form from '../containers/Form';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';

//stylesheets
import '../styles/EditAccount.scss';
import '../styles/Layout.scss';
import '../styles/TextForm.scss';
import '../styles/CreateAccount.scss';
import '../styles/Form.scss';
import '../styles/Label.scss';
import '../styles/Button.scss';
import '../styles/Input.scss';

const CreateAccount = () => {
	return (
		<Layout className="layout-size layout-display">
			<Layout className="layout-form--container">
				<TextForm className="title title-position">
					My account
				</TextForm>
				<Form className="form">
					<Label forInputControl="name" className="label">
						Name:
					</Label>
					<TextForm className="value">
						Juanito Pérez
					</TextForm>
					<Label forInputControl="email" className="label">
						Email:
					</Label>
					<TextForm className="value">
						juanitoperez@mail.com
					</TextForm>
					<Label
						forInputControl="password"
						className="label"
					>
						Password:
					</Label>
					<TextForm className="value">**********</TextForm>
					<Button
						type="submit"
						value="Update"
						className="secondary-button"
					/>
				</Form>
			</Layout>
		</Layout>
	);
};

export default CreateAccount;
