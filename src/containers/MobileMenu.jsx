import React from 'react';

//components and container
import Layout from './Layout';
import UnorderedList from '@components/UnorderedList';
import HiperLink from '@components/HiperLink';
import ListItem from '@components/ListItem';
import Link from '@components/Link';

//stylesheets
import '@styles/Layout.scss';
import '@styles/MobileMenu.scss';

//helpers
import navbarOption from '@helpers/navbarOptions';

const MobileMenu = () => {
	return (
		<Layout className="mobile-menu">
			<UnorderedList>
				{navbarOption.map((item) => (
					<HiperLink key={item}>{item}</HiperLink>
				))}
			</UnorderedList>
			<UnorderedList>
				<ListItem>
					<Link>My orders</Link>
				</ListItem>
				<ListItem>
					<Link>My account</Link>
				</ListItem>
			</UnorderedList>
			<UnorderedList>
				<ListItem>
					<Link className="email">usuario@mail.com</Link>
				</ListItem>
				<ListItem>
					<Link className="sign-out">Sign out</Link>
				</ListItem>
			</UnorderedList>
		</Layout>
	);
};

export default MobileMenu;
