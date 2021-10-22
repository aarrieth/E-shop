import React, { useState, useContext } from 'react';

//components and containers
import Layout from '@containers/Layout';
import Logo from '@components/Logo';
import Navbar from './Navbar';
import UnorderedList from '@components/UnorderedList';
import ListItem from '@components/ListItem';
import Menu from './Menu';
import Checkout from './Checkout';
import AppContext from '../context/AppContest';

//icons and images

import shoppingCard from '@icons/icon_shopping_cart.svg';
import urlIconMenuResponsive from '@icons/icon_menu.svg';
import urlMainLogo from '@logos/logo_yard_sale.svg';

//styles
import '@styles/Header.scss';
import '@styles/Logo.scss';

const Header = () => {
	const { state } = useContext(AppContext);

	const [showToggle, setShowToggle] = useState(false); //show toggle menu
	const [toggleOrders, setToggleOrders] = useState(false); // show checkout list

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
						<ListItem
							onClick={() => setShowToggle(!showToggle)}
							className="email-user"
						>
							usuario@mail.com
						</ListItem>
						<li
							className="shopping-car"
							onClick={() => setToggleOrders(!toggleOrders)}
						>
							<Logo
								urlLogo={shoppingCard}
								alt="shoping car icon"
							/>
							{state.cart.length > 0 ? (
								<Layout>{state.cart.length}</Layout>
							) : null}
						</li>
					</UnorderedList>
					{showToggle && <Menu />}
					{toggleOrders && <Checkout />}
				</Layout>
			</Layout>
		</header>
	);
};

export default Header;
