import React from 'react';
import { IonItemOption, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';
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
            <Coins />
          </IonCol>
          <IonCol>
            <Rank ordinal={3} outOf={116} />
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
