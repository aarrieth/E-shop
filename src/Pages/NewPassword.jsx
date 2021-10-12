import React from 'react';
import '../styles/Layout.scss';
import '../styles/Logo.scss';
import '../styles/Form.scss';
import '../styles/TextForm.scss';
import '../styles/Label.scss';
import '../styles/Input.scss';
import '../styles/Button.scss';
import Form from '../containers/Form';
import Layout from '../containers/Layout';
import TextForm from '../containers/TextForm';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';
import urlLogo from '../assets/logos/logo_yard_sale.svg';
import Logo from '../components/Logo';

const NewPassword = () => {
	return (
		<Layout className="layout-size layout-display">
			<Layout className="layout-form--container">
				<Logo
					urlLogo={urlLogo}
					alt="logo"
					className="logo"
				/>

				<TextForm className="title">
					Create a new password
				</TextForm>
				<TextForm className="subtitle">
					Enter a new password for you account
				</TextForm>
				<Form className="form">
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
			</Layout>
		</Layout>
	);
};

export default NewPassword;
