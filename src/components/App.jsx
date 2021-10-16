import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import RecoveryPassword from '@pages/RecoveryPassword';
import Login from '@pages/Login';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import CreateAccount from '@pages/CreateAccount';
import EditAccount from '@pages/EditAccount';
import MobileMenu from '@containers/MobileMenu';

//stylesheets!
import '../styles/styles.css';

const App = () => {
	return (
		<Router>
			<Layout className="outder-wrapper">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route
						exact
						path="/recovery-password"
						component={RecoveryPassword}
					/>
					<Route
						exact
						path="/create-account"
						component={CreateAccount}
					/>
					<Route
						exact
						path="/edit-account"
						component={EditAccount}
					/>
					<Route
						exact
						path="/mobile-menu"
						component={MobileMenu}
					/>
					<Route exact path="*" component={NotFound} />
				</Switch>
			</Layout>
		</Router>
	);
};

export default App;
