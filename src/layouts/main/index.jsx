import { Route, Switch } from 'react-router-dom';
import routes from '../../router';

function Main() {
  console.log('Main');

  return (
    <main id="main">
      <Switch>
        {routes.map(({ component: Component, path, ...rest }) => {
          return (
            <Route
              key={path}
              path={path}
              render={props => {
                return <Component {...props} />;
              }}
              {...rest}
            />
          );
        })}
      </Switch>
    </main>
  );
}

export default Main;
