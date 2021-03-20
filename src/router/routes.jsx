import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routeConfig from './config';

const Routes = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <Switch>
          {routeConfig.map((routeProp, index) => (
            <Route key={index} {...routeProp} />
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
