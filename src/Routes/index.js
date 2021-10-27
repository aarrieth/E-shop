import RecoveryPassword from '@pages/RecoveryPassword';
import Login from '@pages/Login';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import CreateAccount from '@pages/CreateAccount';
import EditAccount from '@pages/EditAccount';
import ProductDescriptions from '../containers/ProductDescriptions';

const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/login',
		component: Login,
	},
	{
		path: '/recovery-password',
		component: RecoveryPassword,
	},
	{
		path: '/sign-up',
		component: CreateAccount,
	},
	{
		path: '/products/:id',
		component: ProductDescriptions,
	},
	{
		path: '/update',
		component: EditAccount,
	},
	{
		path: '*',
		component: NotFound,
	},
];

export default routes;
