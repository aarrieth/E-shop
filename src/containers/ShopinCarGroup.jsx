import React from 'react';

import Figure from '@components/Figure';
import Layout from './Layout';
import Paragraph from '../components/Paragraph';

//stylesheet
import '@styles/ShopinCarGroup.scss';

const ShopinCarGroup = ({
	product,
	children = undefined,
}) => {
	return (
		<Layout className="shopping-cart">
			<Figure src={product.images} alt={product.title} />
			<Paragraph>{product.title}</Paragraph>
			<Paragraph>${product.price}</Paragraph>
			{children}
		</Layout>
	);
};

export default ShopinCarGroup;
