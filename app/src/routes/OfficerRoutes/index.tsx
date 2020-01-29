import React from 'react';
import { Route } from 'react-router-dom';

const Obligations = React.lazy(() => import('pages/Obligations'));

const OfficerRoutes = () => (
  <>
    <Route exact path="/obligations" component={Obligations} />
  </>
);

export default OfficerRoutes;
