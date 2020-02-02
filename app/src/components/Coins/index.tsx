import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/react';

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
        <h1>
          <strong>{`${children} Ð`}</strong>
        </h1>
      </IonCardContent>
    </IonCard>
  );
};

export default Coins;
