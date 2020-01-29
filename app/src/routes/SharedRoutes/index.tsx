import React from 'react';
import { Route } from 'react-router-dom';

const Home = React.lazy(() => import('pages/Home'));
const Wallet = React.lazy(() => import('pages/Wallet'));

const SharedRoutes = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route exact path="/wallet" component={Wallet} />
  </>
);

export default SharedRoutes;
