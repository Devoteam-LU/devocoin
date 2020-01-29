import React from 'react';
import {
  IonContent,
} from '@ionic/react';
import getObligations from 'mocks/api/getObligations';
import Page from 'layouts/Page';
import ObligationsList from 'components/ObligationsList';

const Home = () => {
  const obligations = getObligations();
  return (
    <Page title="Home">
      <IonContent>
        <ObligationsList obligations={obligations} />
      </IonContent>
    </Page>
  );
};

export default Home;
