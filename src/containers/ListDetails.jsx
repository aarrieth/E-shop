import React from 'react';

//components and containers
import Layout from './Layout';
import ProductCard from './ProductCard';

//stylesheets
import '@styles/Layout.scss';
import '@styles/ListDetails.scss';
import urlIcon from '@icons/bt_add_to_cart.svg';

const productDetails = [
	{
		id: 1,
		urlImage:
			'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		price: '$120,00',
		name: 'Bike',
		urlIcon: urlIcon,
	},
	{
		id: 2,
		urlImage:
			'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		price: '$120,00',
		name: 'Bike',
		urlIcon: urlIcon,
	},
	{
		id: 3,
		urlImage:
			'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		price: '$120,00',
		name: 'Bike',
		urlIcon: urlIcon,
	},
	{
		id: 4,
		urlImage:
			'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		price: '$120,00',
		name: 'Bike',
		urlIcon: urlIcon,
	},
	{
		id: 5,
		urlImage:
			'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		price: '$120,00',
		name: 'Bike',
		urlIcon: urlIcon,
	},
	{
		id: 6,
		urlImage:
			'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		price: '$120,00',
		name: 'Bike',
		urlIcon: urlIcon,
	},
];

const ListDetails = () => {
	return (
		<Layout className="wrapper-list--details">
			<Layout className="cards-container">
				{productDetails?.map((product) => (
					<ProductCard
						key={product.id}
						urlImage={product.urlImage}
						name={product.name}
						price={product.price}
						urlIcon={product.urlIcon}
					/>
				))}
			</Layout>
		</Layout>
	);
};

export default ListDetails;
