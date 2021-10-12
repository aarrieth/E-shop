import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import RecoveryPassword from '../Pages/RecoveryPassword';
import Login from '../Pages/Login';
import Layout from '../containers/Layout';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';

//stylesheets!
import '../styles/styles.css';

const App = () => {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route
						exact
						path="/recovery-password"
						component={RecoveryPassword}
					/>
					<Route exact path="*" component={NotFound} />
				</Switch>
			</Layout>
		</Router>
	);
};

export default App;
