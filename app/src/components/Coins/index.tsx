import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonItem,
} from '@ionic/react';
import { wallet } from 'ionicons/icons';

interface Props {
  children: React.ReactNode;
}

const Coins = ({ children }: Props) => {
  return (
    <IonCard routerLink="/wallet" color="success">
      <IonCardHeader>
        <IonCardSubtitle>Devocoins</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonItem button color="inherit" lines="none">
          <IonIcon slot="start" icon={wallet} />
          <h1>
            <strong>{`${children} Ð`}</strong>
          </h1>
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};

export default Coins;
