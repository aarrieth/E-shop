import React from 'react';

//containers
import Layout from '@containers/Layout';
import Title from '../components/Title';
import Paragraph from '@components/Paragraph';
import ShopinCarGroup from './ShopinCarGroup';
import Span from '@components/Span';

//stylesheet
import '@styles/Orders.scss';

const Orders = () => {
	return (
		<Layout className="my-order">
			<Layout className="my-order-container">
				<Title className="title">My orders</Title>
				<Layout className="my-order-content">
					<Layout className="order">
						<Paragraph>
							<Span>03.25.21</Span>
							<Span>6 articles</Span>
						</Paragraph>
						<Paragraph>$560.00</Paragraph>
					</Layout>
					<ShopinCarGroup />
					<ShopinCarGroup />
					<ShopinCarGroup />
				</Layout>
			</Layout>
		</Layout>
	);
};

export default Orders;
