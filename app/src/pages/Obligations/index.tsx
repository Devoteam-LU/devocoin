import React from 'react';
import { IonContent } from '@ionic/react';
import getObligations from 'mocks/api/getObligations';
import Page from 'layouts/Page';
import ObligationsList from 'components/ObligationsList';

const Obligations = () => {
  const obligations = getObligations();
  return (
    <Page title="Obligations">
      <IonContent>
        <ObligationsList obligations={obligations} />
        <ObligationsList title="Obligations pending my approval" obligations={obligations} />
      </IonContent>
    </Page>
  );
};

export default Obligations;
