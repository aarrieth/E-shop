import React from 'react';

//components and conatiners
import Layout from '../containers/Layout';
import Logo from '../components/Logo';
import Navbar from './Navbar';
import UnorderedList from '../components/UnorderedList';
import ListItem from '../components/ListItem';

//icons and images

import shopingCarIcon from '../assets/icons/icon_shopping_cart.svg';
import urlIconMenuResponsive from '../assets/icons/icon_menu.svg';
import urlMainLogo from '../assets/logos/logo_yard_sale.svg';

//styles
import '../styles/Header.scss';
import '../styles/Logo.scss';

const Header = () => {
	return (
		<header className="header-site">
			<Layout className="header-inner">
				<Layout className="custom-icon-menu">
					<Logo
						urlLogo={urlIconMenuResponsive}
						alt="menu"
						className="menu"
					/>
				</Layout>
				<Layout className="header-navigation-left">
					<Layout className="navbar-logo">
						<Logo
							urlLogo={urlMainLogo}
							alt="main logo"
							className="navbar-logo-custom"
						/>
					</Layout>
					<Navbar />
				</Layout>
				<Layout className="header-navigation-right">
					<UnorderedList>
						<ListItem className="email-user">
							usuario@mail.com
						</ListItem>
						<ListItem className="shopping-car">
							<Logo
								urlLogo={shopingCarIcon}
								alt="shoping car icon"
							/>
							<Layout>2</Layout>
						</ListItem>
					</UnorderedList>
				</Layout>
			</Layout>
		</header>
	);
};

export default Header;
