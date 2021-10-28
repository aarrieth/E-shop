import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import Layout from './containers/Layout';
//utilities
import routes from './Routes';

//stylesheets!
import './styles/styles.css';

import AppContext from './context/AppContest';
import useInitialState from './hooks/useInitialState';
import ProductItem from './containers/ProductItem';

const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<Router>
				<Layout className="outder-wrapper">
					<Switch>
						{routes.map(({ path, component }) => (
							<Route
								exact
								path={path}
								component={component}
								key={component}
							/>
						))}
					</Switch>
				</Layout>
			</Router>
		</AppContext.Provider>
	);
};

export default App;
