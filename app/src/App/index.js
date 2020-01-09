import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DrizzleProvider } from '@drizzle/react-plugin';
import { LoadingContainer } from '@drizzle/react-components';

import './App.css';

import drizzleOptions from 'utils/drizzleOptions';

const HomeContainer = React.lazy(() => import('containers/HomeContainer')); // Lazy-loaded
const WalletContainer = React.lazy(() => import('containers/WalletContainer')); // Lazy-loaded

const App = () => (
  <DrizzleProvider options={drizzleOptions}>
    <LoadingContainer>
      <Router>
        <Suspense fallback="...loading">
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/wallet" component={WalletContainer} />
          </Switch>
        </Suspense>
      </Router>
    </LoadingContainer>
  </DrizzleProvider>
);

export default App;
