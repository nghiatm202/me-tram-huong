import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@/layouts';
import routes from '@/routes';

// load app SCSS styles
import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          {routes.map((route, index) =>
            route.index ? (
              <Route index key={index} element={route.element} />
            ) : (
              <Route path={route.path} key={index} element={route.element} />
            ),
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
