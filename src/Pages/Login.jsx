import React, { useRef } from 'react';
import '../styles/Layout.scss';
import '../styles/Logo.scss';
import '../styles/Form.scss';
import '../styles/Label.scss';
import '../styles/Input.scss';
import '../styles/Button.scss';
import Layout from '../containers/Layout';
import Logo from '../components/Logo';
import urlMainLogo from '../assets/logos/logo_yard_sale.svg';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';
import Link from '../components/Link';

function Login(props) {
	const form = useRef(null);

	const handleSubmit = (evt) => {
		evt.preventDefault();
		const formData = new FormData(form.current);
		const newData = {
			email: formData.get('email'),
			password: formData.get('password'),
		};
		console.log(newData);
	};
	return (
		<Layout className="layout-size layout-display">
			<Layout className="layout-form--container">
				<Logo
					urlLogo={urlMainLogo}
					alt="main logo"
					className="logo"
				/>
				<form className="form" ref={form}>
					<Label forInputControl="email" className="label">
						Email address
					</Label>
					<Input
						type="text"
						id="email"
						name="email"
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
						name="password"
						placeholder="*********"
						className="input"
					/>
					<button
						className="primary-button primary-button--succes"
						onClick={handleSubmit}
					>
						Log In
					</button>
					<Link href="/">Forgot my password</Link>
				</form>
				<Button className="secondary-button">
					Sign Up
				</Button>
			</Layout>
		</Layout>
	);
}

export default Login;
