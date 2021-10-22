import axios from 'axios';
import { useState, useEffect } from 'react';

const useGetProducts = (url) => {
	const [products, setProductList] = useState(null);
	const [load, setLoad] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoad(true);
			try {
				const resolve = await axios.get(url);
				setProductList(resolve.data);
				setLoad(false);
			} catch (err) {
				setError(err);
			}
		};
		fetchData();
	}, []);

	return {
		products,
		load,
		error,
	};
};

export default useGetProducts;
