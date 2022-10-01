//Purpose: This component is for setting header
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';

import Weather from '../features/lookup/components/Weather';

const AppRoutes = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Weather />
          </Route>
          <Route exact path="/ottawa">
            <Weather />
          </Route>
          <Route exact path="/montreal">
            <Weather />
          </Route>
        </Switch>
      </Layout>
    </>
  );
};

export default AppRoutes;
