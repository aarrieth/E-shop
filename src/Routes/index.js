import RecoveryPassword from '@pages/RecoveryPassword';
import Login from '@pages/Login';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import CreateAccount from '@pages/CreateAccount';
import EditAccount from '@pages/EditAccount';

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
		path: '/update',
		component: EditAccount,
	},
	{
		path: '*',
		component: NotFound,
	},
];

export default routes;
