import React from 'react';
import navbarOption from '@helpers/navbarOptions';
import UnorderedList from '@components/UnorderedList';
import HiperLink from '@components/HiperLink';

const Navbar = ({ className = null }) => {
	return (
		<nav className={className}>
			<UnorderedList>
				{navbarOption.map((item) => (
					<HiperLink key={item}>{item}</HiperLink>
				))}
			</UnorderedList>
		</nav>
	);
};

export default Navbar;
