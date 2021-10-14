import React from 'react';

//components and containers
import Layout from '../containers/Layout';
import TextForm from '../containers/TextForm';
import Form from '../containers/Form';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';

//stylesheets
import '../styles/Layout.scss';
import '../styles/TextForm.scss';
import '../styles/CreateAccount.scss';
import '../styles/Form.scss';
import '../styles/Label.scss';
import '../styles/Input.scss';
import '../styles/Button.scss';

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
					<Input type="text" id="name" className="input" />
					<Label forInputControl="email" className="label">
						Email:
					</Label>
					<Input
						type="email"
						id="email"
						className="input"
					/>
					<Label
						forInputControl="password"
						className="label"
					>
						Password:
					</Label>
					<Input
						type="password"
						id="password"
						className="input"
					/>
					<Button
						type="submit"
						value="create"
						className="primary-button primary-button--position"
					/>
				</Form>
			</Layout>
		</Layout>
	);
};

export default CreateAccount;
