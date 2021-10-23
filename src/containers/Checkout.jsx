import React, { useContext } from 'react';

import Layout from '@containers/Layout';
import Logo from '@components/Logo';
import Title from '@components/Title';
import ShoppingCarGroup from './ShopinCarGroup';
import Button from '../components/Button';
import Paragraph from '@components/Paragraph';
import Span from '@components/Span';
import AppContext from '../context/AppContest';

import arrowLeft from '@icons/flechita.svg';
import close from '@icons/icon_close.png';

import '@styles/Checkout.scss';

const Checkout = () => {
	const { state } = useContext(AppContext);

	/*
	 * Para calcular el valor total a pagar de todos los productos agregados al carrito de compras.
	 * Se realiza el cálculo desde el estado local.
	 */
	const sumTotal = () => {
		const reducer = (accumulator, currentValue) =>
			accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	};
	return (
		<aside className="product-detail">
			<Layout className="title-container">
				<Logo urlLogo={arrowLeft} alt="arrow left icon" />
				<Title className="title">My order</Title>
			</Layout>
			<Layout className="my-order-content">
				{state.cart.map((product) => (
					<ShoppingCarGroup
						key={`product-${product.id}`}
						product={product}
					>
						<Logo urlLogo={close} alt="close" />
					</ShoppingCarGroup>
				))}
				<Layout className="order">
					<Paragraph>
						<Span>Total</Span>
					</Paragraph>
					<Paragraph>${sumTotal()}</Paragraph>
				</Layout>

				<Button className="primary-button">Checkout</Button>
			</Layout>
		</aside>
	);
};

export default Checkout;
