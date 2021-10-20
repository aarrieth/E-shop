import React from 'react';

import Layout from '@containers/Layout';
import Logo from '@components/Logo';
import Title from '@components/Title';
import ShoppingCarGroup from './ShopinCarGroup';
import Button from '@components/Button';
import Paragraph from '@components/Paragraph';
import Span from '@components/Span';

import arrowLeft from '@icons/flechita.svg';
import close from '@icons/icon_close.png';

import '@styles/Checkout.scss';
const Checkout = () => {
	return (
		<aside className="product-detail">
			<Layout className="title-container">
				<Logo urlLogo={arrowLeft} alt="arrow left icon" />
				<Title className="title">My order</Title>
			</Layout>
			<Layout className="my-order-content">
				<ShoppingCarGroup>
					<Logo urlLogo={close} alt="close" />
				</ShoppingCarGroup>
				<ShoppingCarGroup>
					<Logo urlLogo={close} alt="close" />
				</ShoppingCarGroup>
				<ShoppingCarGroup>
					<Logo urlLogo={close} alt="close" />
				</ShoppingCarGroup>

				<Layout className="order">
					<Paragraph>
						<Span>Total</Span>
					</Paragraph>
					<Paragraph>$560.00</Paragraph>
				</Layout>
				<Button
					type="button"
					value="Checkout"
					className="primary-button"
				/>
			</Layout>
		</aside>
	);
};

export default Checkout;
