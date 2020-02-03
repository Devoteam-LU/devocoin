import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonItem,
} from '@ionic/react';
import { newContextComponents } from '@drizzle/react-components';
import { wallet } from 'ionicons/icons';
import { useDrizzle, useDrizzleState } from 'utils/drizzleHooks';

const { ContractData } = newContextComponents;

const Coins = () => {
  const { drizzle } = useDrizzle();
  const drizzleState = useDrizzleState();
  const { accounts } = drizzleState;

  return (
    <IonCard routerLink="/wallet" color="success">
      <IonCardHeader>
        <IonCardSubtitle>Devocoins</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonItem button color="inherit" lines="none">
          <IonIcon slot="start" icon={wallet} />
          <h1>
            <strong>
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="DevocoinToken"
                method="balanceOf"
                methodArgs={[accounts[0]]}
              />{' '}
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="DevocoinToken"
                method="symbol"
                hideIndicator
              />
            </strong>
          </h1>
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};

export default Coins;
