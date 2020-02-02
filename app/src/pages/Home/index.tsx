import React from 'react';
import { IonContent, IonItemOption, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';
import getObligations from 'mocks/api/getObligations';
import Page from 'layouts/Page';
import ObligationsList from 'components/ObligationsList';
import { archive } from 'ionicons/icons';
import Coins from 'components/Coins';
import Rank from 'components/Rank';

const Home = () => {
  const obligations = getObligations();
  return (
    <Page title="Home">
      <IonGrid>
        <IonRow>
          <IonCol>
            <Coins>360</Coins>
          </IonCol>
          <IonCol>
            <Rank>3/116</Rank>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
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
          </IonCol>
        </IonRow>
      </IonGrid>
    </Page>
  );
};

export default Home;
