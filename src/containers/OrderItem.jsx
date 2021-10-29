import React from 'react';

//components and containers
import Layout from '../containers/Layout';
import Tittle from '../components/Title';
import Paragraph from '../components/Paragraph';
import Span from '../components/Span';
import Logo from '../components/Logo';

//icons and logos
import arrowRight from '../assets/icons/flechita.svg';

//stylesheeta
import '../styles/OrderItem.scss';

const OrderItem = () => {
	return (
		<Layout className="my-order">
			<Layout className="my-order-container">
				<Tittle className="title">My orders</Tittle>
				<Layout className="my-order-content">
					<Layout className="order">
						<Paragraph>
							<Span>03.25.21</Span>
							<Span>6 articles</Span>
						</Paragraph>
						<Paragraph>$560.00</Paragraph>
						<Logo urlLogo={arrowRight} alt="arrow right" />
					</Layout>
				</Layout>
			</Layout>
		</Layout>
	);
};

export default OrderItem;
