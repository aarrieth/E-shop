import React from 'react';

import Layout from './Layout';
import Logo from '@components/Logo';
import ProductInfo from './ProductInfo';

//stylesheet
import '@styles/ProductCard.scss';

const ProductCard = ({
	urlImage,
	price,
	name,
	urlIcon,
}) => {
	return (
		<Layout className="product-card">
			<Logo urlLogo={urlImage} />
			<ProductInfo
				price={price}
				name={name}
				urlIcon={urlIcon}
			/>
		</Layout>
	);
};

export default ProductCard;
