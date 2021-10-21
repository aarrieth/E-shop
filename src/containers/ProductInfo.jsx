import React from 'react';

import Layout from './Layout';
import TextForm from '@containers/TextForm';
import AddToCar from './AddToCar';

import '@styles/ProductInfo.scss';

import addToCar from '@icons/bt_add_to_cart.svg';

const ProductInfo = ({ price, name }) => {
	return (
		<Layout className="product-info">
			<Layout>
				<TextForm>{price}</TextForm>
				<TextForm>{name}</TextForm>
			</Layout>
			<AddToCar urlIcon={addToCar} />
		</Layout>
	);
};

export default ProductInfo;
