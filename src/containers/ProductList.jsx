import React from 'react';

//components and containers
import Layout from './Layout';
import ProductItem from './ProductItem';

//stylesheets
import '../styles/Layout.scss';
import '../styles/ListDetails.scss';

import useGetProducts from '../hooks/useGetProducts';

const API_URL =
	'https://api.escuelajs.co/api/v1/products?limit=10&offset=0';

const ProductList = () => {
	const { products, load, error } = useGetProducts(API_URL);

	if (load) <h1>Loading....!</h1>;
	if (error) <h1>Producto no encontrado</h1>;

	return (
		<Layout className="wrapper-list--details">
			<Layout className="cards-container">
				{products?.map((product) => (
					<ProductItem product={product} key={product.id} />
				))}
			</Layout>
		</Layout>
	);
};

export default ProductList;
