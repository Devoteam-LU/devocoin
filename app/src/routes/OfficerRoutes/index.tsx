import React from 'react';
import { Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';

const OfficerObligations = React.lazy(() => import('pages/Obligations/OfficerObligations'));

const OfficerRoutes = () => (
  <IonRouterOutlet>
    <Route exact path="/obligations" component={OfficerObligations} />
  </IonRouterOutlet>
);

export default OfficerRoutes;
