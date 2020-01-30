import React from 'react';
import { IonContent, IonItemOption, IonIcon } from '@ionic/react';
import getObligations from 'mocks/api/getObligations';
import Page from 'layouts/Page';
import ObligationsList from 'components/ObligationsList';
import { archive } from 'ionicons/icons';

const Home = () => {
  const obligations = getObligations();
  return (
    <Page title="Home">
      <IonContent>
        <ObligationsList
          obligations={obligations}
          startOption={
            <IonItemOption color="danger" onClick={() => {}}>
              <IonIcon slot="start" icon={archive} size="large" />
            </IonItemOption>
          }
          endOption={
            <IonItemOption color="success" onClick={() => {}}>
              Complete
            </IonItemOption>
          }
        />
      </IonContent>
    </Page>
  );
};

export default Home;
