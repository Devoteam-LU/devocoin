import React from 'react';
import { Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';

const Obligations = React.lazy(() => import('pages/Obligations'));

const OfficerRoutes = () => (
  <IonRouterOutlet>
    <Route exact path="/obligations" component={Obligations} />
  </IonRouterOutlet>
);

export default OfficerRoutes;
