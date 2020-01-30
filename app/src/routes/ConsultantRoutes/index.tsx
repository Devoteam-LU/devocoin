import React from 'react';
import { Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';

const Home = React.lazy(() => import('pages/Home'));
const Wallet = React.lazy(() => import('pages/Wallet'));

const ConsultantRoutes = () => (
  <IonRouterOutlet>
    <Route exact path="/" component={Home} />
    <Route exact path="/wallet" component={Wallet} />
  </IonRouterOutlet>
);

export default ConsultantRoutes;
