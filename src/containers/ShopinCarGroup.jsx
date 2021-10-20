import React from 'react';

import Figure from '@components/Figure';
import Layout from './Layout';
import Paragraph from '../components/Paragraph';

//stylesheet
import '@styles/ShopinCarGroup.scss';

const ShopinCarGroup = () => {
	return (
		<Layout className="shopping-cart">
			<Figure
				src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				alt="product image"
			/>
			<Paragraph>Bike</Paragraph>
			<Paragraph>$30.00</Paragraph>
		</Layout>
	);
};

export default ShopinCarGroup;
