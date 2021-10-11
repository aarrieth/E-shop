import React from 'react';
import '../styles/NewPassword.scss';
import '../styles/Layout.scss';
import Form from './Form';
import FormContainer from './FormContainer';
import Layout from './Layout';
import TextForm from './TextForm';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';
import Logo from '../assets/logos/logo_yard_sale.svg';

const NewPassword = () => {
	return (
		<Layout className="layout-size layout-display">
			<FormContainer>
				<img src={Logo} alt="logo" className="logo" />

				<TextForm className="title">
					Create a new password
				</TextForm>
				<TextForm className="subtitle">
					Enter a new password for you account
				</TextForm>
				<Form>
					<Label
						forInputControl="password"
						className="label"
					>
						Old password
					</Label>

					<Input
						type="password"
						id="password"
						placeholder="*********"
						className="input input-password"
					/>

					<Label
						forInputControl="new-password"
						className="label"
					>
						New password
					</Label>
					<Input
						type="password"
						id="new-password"
						placeholder="*********"
						className="input input-password"
					/>

					<Button
						type="submit"
						value="Confirm"
						className="primary-button primary-button--succes"
					/>
				</Form>
			</FormContainer>
		</Layout>
	);
};

export default NewPassword;
