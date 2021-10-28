import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import Layout from './containers/Layout';
import RecoveryPassword from './pages/RecoveryPassword';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CreateAccount from './pages/CreateAccount';
import EditAccount from './pages/EditAccount';
import ProductDescriptions from './containers/ProductDescriptions';
//utilities

//stylesheets!
import './styles/styles.css';

import AppContext from './context/AppContest';
import useInitialState from './hooks/useInitialState';

const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<Router>
				<Layout className="outder-wrapper">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route
							exact
							path="/sign-up"
							component={CreateAccount}
						/>
						<Route
							exact
							path="/recovery-pasword"
							component={RecoveryPassword}
						/>
						<Route
							exact
							path="/update"
							component={EditAccount}
						/>
						<Route
							exact
							path="/products/:id"
							component={ProductDescriptions}
						/>
						<Route exact path="*" component={NotFound} />
					</Switch>
				</Layout>
			</Router>
		</AppContext.Provider>
	);
};

export default App;
