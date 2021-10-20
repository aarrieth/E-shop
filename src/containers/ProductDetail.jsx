import React from 'react';

//containers and components
import Layout from '@containers/Layout';
import Logo from '@components/Logo';
import Paragraph from '@components/Paragraph';

//icons and logos
import close from '../assets/icons/icon_close.png';
import btnAddToCar from '@icons/bt_add_to_cart.svg';

//stylesheet
import '@styles/ProductDetails.scss';

const ProductDetail = () => {
	return (
		<aside className="product-detail">
			<Layout className="product-detail-close">
				<Logo urlLogo={close} alt="close" />
			</Layout>
			<Logo
				urlLogo="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				alt="product image"
			/>
			<Layout className="product-info">
				<Paragraph>$35.00</Paragraph>
				<Paragraph>Bike</Paragraph>
				<Paragraph>
					With its practical position, this bike also
					fulfills a decorative function, add your hall or
					workspace.
				</Paragraph>
				<button className="primary-button add-to-cart-button">
					<Logo
						urlLogo={btnAddToCar}
						alt="add to car image"
					/>
					Add to car
				</button>
			</Layout>
		</aside>
	);
};

export default ProductDetail;
