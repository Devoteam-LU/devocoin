import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonItem } from '@ionic/react';

interface Props {
  children: React.ReactNode;
}

const Coins = ({ children }: Props) => {
  return (
    <IonCard button color="success" href="#">
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
