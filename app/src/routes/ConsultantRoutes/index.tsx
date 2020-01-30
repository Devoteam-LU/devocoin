import React from 'react';
import { Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';

const ConsultantObligations = React.lazy(() => import('pages/Obligations/ConsultantObligations'));

const OfficerRoutes = () => (
  <IonRouterOutlet>
    <Route exact path="/obligations" component={ConsultantObligations} />
  </IonRouterOutlet>
);

export default OfficerRoutes;
