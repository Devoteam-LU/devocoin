import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DrizzleProvider } from '@drizzle/react-plugin';
import { LoadingContainer } from '@drizzle/react-components';

import './App.css';

import drizzleOptions from 'utils/drizzleOptions';

const MyContainer = React.lazy(() => import('containers/MyContainer')); // Lazy-loaded

const App = () => (
  <DrizzleProvider options={drizzleOptions}>
    <LoadingContainer>
      <Router>
        <Suspense fallback="...loading">
          <Switch>
          <Route exact path="/" component={MyContainer} />
          <Route exact path="/wallet" component={MyContainer} />
          </Switch>
        </Suspense>
      </Router>
    </LoadingContainer>
  </DrizzleProvider>
);

export default App;
