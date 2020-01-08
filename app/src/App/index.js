import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DrizzleProvider } from '@drizzle/react-plugin';
import { LoadingContainer } from '@drizzle/react-components';

import './App.css';

import drizzleOptions from 'utils/drizzleOptions';

const DrizzleConnector = React.lazy(() => import('containers/DrizzleConnector')); // Lazy-loaded

const App = () => (
  <DrizzleProvider options={drizzleOptions}>
    <LoadingContainer>
      <Router>
        <Suspense fallback="...loading">
          <Switch>
          <Route exact path="/" component={DrizzleConnector} />
          <Route exact path="/wallet" component={DrizzleConnector} />
          </Switch>
        </Suspense>
      </Router>
    </LoadingContainer>
  </DrizzleProvider>
);

export default App;
