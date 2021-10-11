import React from 'react';
import '../styles/Layout.scss';
import '../styles/Logo.scss';
import '../styles/EmailConfirmed.scss';
import Layout from '../containers/Layout';
import urlLogo from '../assets/logos/logo_yard_sale.svg';
import Logo from '../components/Logo';
import TextForm from '../containers/TextForm';
import logoEmail from '../assets/icons/email.svg';
import Button from '../components/Button';

const EmailConfirmed = () => {
	return (
		<Layout className="layout-size layout-display">
			<Layout className="layout-form--container layout-display--email-image">
				<Logo
					urlLogo={urlLogo}
					alt="Logo"
					className="logo"
				/>
				<TextForm className="title">
					Email has been sent!
				</TextForm>
				<TextForm className="subtitle">
					Please check your inbox for instructions on how to
					reset the password
				</TextForm>
				<Layout className="email-image">
					<Logo urlLogo={logoEmail} alt="email" />
				</Layout>
				<Button
					type="button"
					value="Back to Home"
					className="primary-button primary-button--succes"
				/>
				<TextForm className="resend">
					<span>Didn't receive the email?</span>{' '}
					<a href="/">Resend</a>
				</TextForm>
			</Layout>
		</Layout>
	);
};

export default EmailConfirmed;
