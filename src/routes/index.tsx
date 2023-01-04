import Home from '@/pages/home';
import ProductDetails from '@/pages/product-details';
import Cart from '@/pages/cart';
import Order from '@/pages/order';

const routes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: '/san-pham',
    element: <ProductDetails />,
  },
  {
    path: '/gio-hang',
    element: <Cart />,
  },
  {
    path: '/dat-hang',
    element: <Order />,
  },
];

export default routes;
