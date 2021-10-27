import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

import Header from './Header';
import '../styles/ProductDescriptions.scss';
const ProductDescriptions = () => {
	const [uniqueProduct, setUniqueProduct] = useState({});

	const API_PRODUCT =
		'https://api.escuelajs.co/api/v1/products/';
	const { id } = useParams();

	const handlerProductData = (payload) => {
		setUniqueProduct(payload);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const resolve = await axios.get(
					`${API_PRODUCT}${id}`
				);
				handlerProductData(resolve.data);
			} catch (err) {
				console.error(err);
			}
		};
		fetchData();
	}, []);

	console.log(uniqueProduct);
	return (
		<>
			<Header />
			<div className="wrapper-single-product">
				<div className="wrapper-product-details">
					<div className="product-image-cover">
						<figure className="image-cover">
							<img
								src={uniqueProduct.images}
								alt={uniqueProduct.title}
							/>
						</figure>
					</div>
					<div className="wrapper-product-info">
						<div className="wrapper-product-name">
							<h1>{uniqueProduct.title}</h1>
						</div>
						<div className="wrapper-product-info">
							<p>${uniqueProduct.price}</p>
							<p>{uniqueProduct.description}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDescriptions;
