import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Drizzle } from '@drizzle/store';
import { drizzleReactHooks } from '@drizzle/react-plugin';
import drizzleOptions from 'utils/drizzleOptions';
import Loading from 'components/Loading';
import './App.css';

const drizzle = new Drizzle(drizzleOptions);
const { DrizzleProvider } = drizzleReactHooks;

const Home = React.lazy(() => import('pages/Home')); // Lazy-loaded
const Wallet = React.lazy(() => import('pages/Wallet')); // Lazy-loaded

const App = () => (
  <DrizzleProvider drizzle={drizzle}>
    <Loading>
      <Router>
        <Suspense fallback="...loading">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/wallet" component={Wallet} />
          </Switch>
        </Suspense>
      </Router>
    </Loading>
  </DrizzleProvider>
);

export default App;
