import React from 'react';

import Layout from './Layout';
import TextForm from '@containers/TextForm';
import AddToCar from './AddToCar';

import '@styles/ProductInfo.scss';

const ProductInfo = ({ price, name, urlIcon }) => {
	return (
		<Layout className="product-info">
			<Layout>
				<TextForm>{price}</TextForm>
				<TextForm>{name}</TextForm>
			</Layout>
			<AddToCar urlIcon={urlIcon} />
		</Layout>
	);
};

export default ProductInfo;
