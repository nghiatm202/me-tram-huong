import NotFound from '../components/not-found';
import HomeRoute from '../pages/home/route';
import CheckoutRoute from '../pages/checkout/route';

const appRoutes = [...HomeRoute, ...CheckoutRoute];

const routes = [
  ...appRoutes,
  {
    path: '*',
    layout: {
      header: false,
      footer: false,
    },
    component: NotFound,
  },
];

export default routes;
