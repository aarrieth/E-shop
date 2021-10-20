import React from 'react';

//containers
import Layout from '@containers/Layout';
import Tittle from '@components/Tittle';
import Paragraph from '@components/Paragraph';
import ShoppingCarGroup from './ShoppingCarGroup';
import TextContainer from '@components/TextContainer';

//stylesheet
import '@styles/Orders.scss';

const Orders = () => {
	return (
		<Layout className="my-order">
			<Layout className="my-order-container">
				<Tittle className="title">My order</Tittle>
				<Layout className="my-order-content">
					<Layout className="order">
						<Paragraph>
							<TextContainer>03.25.21</TextContainer>
							<TextContainer>6 articles</TextContainer>
						</Paragraph>
						<Paragraph>$560.00</Paragraph>
					</Layout>
					<ShoppingCarGroup />
					<ShoppingCarGroup />
					<ShoppingCarGroup />
				</Layout>
			</Layout>
		</Layout>
	);
};

export default Orders;
