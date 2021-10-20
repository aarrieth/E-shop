import React from 'react';

import Layout from '@containers/Layout';
import UnorderedList from '@components/UnorderedList';
import HiperLink from '../components/HiperLink';

//stylesheet
import '@styles/Menu.scss';

const Menu = ({ defaultToggled = false }) => {
	return (
		<Layout className="desktop-menu">
			<UnorderedList className="desktop-menu--inner">
				<HiperLink path="/" className="title">
					My orders
				</HiperLink>
				<HiperLink path="/">My account</HiperLink>
				<HiperLink path="/">Sign out</HiperLink>
			</UnorderedList>
		</Layout>
	);
};

export default Menu;
