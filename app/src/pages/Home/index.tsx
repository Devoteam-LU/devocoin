import React from 'react';
import { IonGrid, IonRow, IonCol, IonRouterLink, IonItemOption, IonIcon } from '@ionic/react';
import { newContextComponents } from '@drizzle/react-components';
import { archive, archiveSharp } from 'ionicons/icons';
import { DrizzleContractForm } from 'common/types';
import getObligations from 'mocks/api/getObligations';
import { useDrizzle, useDrizzleState } from 'utils/drizzleHooks';
import Page from 'layouts/Page';
import Coins from 'components/CoinsCard';
import Rank from 'components/RankCard';
import ObligationsList from 'components/ObligationsList';

const { ContractForm } = newContextComponents;

const Home = () => {
  const { drizzle } = useDrizzle();
  const drizzleState = useDrizzleState();
  const obligations = getObligations();

  return (
    <Page title="Home">
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonRouterLink routerLink="/wallet">
              <Coins />
            </IonRouterLink>
          </IonCol>
          <IonCol>
            <Rank ordinal={3} outOf={116} />
          </IonCol>
        </IonRow>
      </IonGrid>
      <ObligationsList
        obligations={obligations}
        startOption={
          <ContractForm
            render={({ handleSubmit }: DrizzleContractForm) => (
              <IonItemOption color="danger" onClick={handleSubmit}>
                <IonIcon slot="start" size="large" ios={archive} md={archiveSharp} />
              </IonItemOption>
            )}
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Obligation"
            method="archive"
          />
        }
        endOption={
          <ContractForm
            render={({ handleSubmit }: DrizzleContractForm) => (
              <IonItemOption color="success" onClick={handleSubmit}>
                Complete
              </IonItemOption>
            )}
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Obligation"
            method="complete"
          />
        }
      />
    </Page>
  );
};

export default Home;
