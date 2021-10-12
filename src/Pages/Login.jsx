import React from 'react';
import '../styles/Layout.scss';
import '../styles/Logo.scss';
import '../styles/Form.scss';
import '../styles/Label.scss';
import '../styles/Input.scss';
import '../styles/Button.scss';
import Layout from '../containers/Layout';
import Logo from '../components/Logo';
import urlMainLogo from '../assets/logos/logo_yard_sale.svg';
import Form from '../containers/Form';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';
import Link from '../components/Link';

function Login(props) {
	return (
		<Layout className="layout-size layout-display">
			<Layout className="layout-form--container">
				<Logo
					urlLogo={urlMainLogo}
					alt="main logo"
					className="logo"
				/>
				<Form className="form">
					<Label forInputControl="email" className="label">
						Email address
					</Label>
					<Input
						type="text"
						id="email"
						placeholder="usuario@mail.com"
						className="input"
					/>
					<Label
						forInputControl="password"
						className="label"
					>
						Email address
					</Label>
					<Input
						type="password"
						id="password"
						placeholder="*********"
						className="input"
					/>
					<Button
						type="submit"
						value="Log In"
						className="primary-button primary-button--succes"
					/>
					<Link href="/">Forgot my password</Link>
				</Form>
				<Button
					type="submit"
					value="Log In"
					className="secondary-button"
				/>
			</Layout>
		</Layout>
	);
}

export default Login;
