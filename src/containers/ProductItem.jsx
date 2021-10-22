import React, { useContext } from 'react';
import AppContext from '../context/AppContest';

import addToCartImage from '../assets/icons/bt_add_to_cart.svg';

//stylesheet
import '@styles/ProductItem.scss';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = (item) => {
		addToCart(item);
	};
	return (
		<div className="product-card">
			<img src={product.images} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img
						src={addToCartImage}
						alt="Add to cart images"
					/>
				</figure>
			</div>
		</div>
	);
};

export default ProductItem;
