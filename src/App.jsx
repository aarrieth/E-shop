import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import Layout from '@containers/Layout';

//utilities
import routes from './Routes';

//stylesheets!
import '@styles/styles.css';

const App = () => {
	return (
		<Router>
			<Layout className="outder-wrapper">
				<Switch>
					{routes.map(({ path, component }) => (
						<Route
							exact
							path={path}
							component={component}
						/>
					))}
				</Switch>
			</Layout>
		</Router>
	);
};

export default App;
