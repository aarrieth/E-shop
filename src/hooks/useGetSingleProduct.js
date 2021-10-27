import axios from 'axios';
import { useState, useEffect } from 'react';

const APIR_PRODUCT =
	'https://api.escuelajs.co/api/v1/products/';

const useGetSingleProduct = (idCharacter) => {
	const [uniqueProduct, setUniqueProduct] = useState(null);

	const handlerProductData = (payload) => {
		setUniqueProduct(payload);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const resolve = await axios.get(
					`${APIR_PRODUCT}${idCharacter}`
				);
				handlerProductData(resolve.data);
			} catch (err) {
				console.error(err);
			}
		};
		fetchData();
	}, []);

	return uniqueProduct;
};

export default useGetSingleProduct;
