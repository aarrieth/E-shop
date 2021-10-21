import React, { useEffect, useState } from 'react';
import axios from 'axios';

//components and containers
import Layout from './Layout';
import ProductCard from './ProductCard';

//stylesheets
import '@styles/Layout.scss';
import '@styles/ListDetails.scss';

const ProductList = () => {
	const [productList, setProductList] = useState([]);

	useEffect(async () => {
		const response = await axios.get(
			'https://api.escuelajs.co/api/v1/products?limit=10&offset=0'
		);
		setProductList(response.data);
	}, []);

	return (
		<Layout className="wrapper-list--details">
			<Layout className="cards-container">
				{productList?.map((product) => (
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
