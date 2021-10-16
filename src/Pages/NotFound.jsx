import React from 'react';
import HiperLink from '@components/HiperLink';
import Layout from '@containers/Layout';
import Title from '@components/Title';

import '@styles/NotFound.scss';

const NotFound = () => {
	return (
		<Layout className="notFound">
			<Layout className="notFound-inner">
				<Title id="title" className="notFound-title">
					<span>404</span> <br /> PAGE NOT FOUND
				</Title>
				<HiperLink>
					Click para regresar a la página principal
				</HiperLink>
			</Layout>
		</Layout>
	);
};

export default NotFound;
