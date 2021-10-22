import React, { useEffect, useState } from 'react';
import axios from 'axios';

//components and containers
import Layout from './Layout';
import ProductCard from './ProductCard';

//stylesheets
import '@styles/Layout.scss';
import '@styles/ListDetails.scss';

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
					<ProductCard
						key={product.id}
						price={product.price}
						name={product.title}
						urlImage={product.images[0]}
					/>
				))}
			</Layout>
		</Layout>
	);
};

export default ProductList;
