import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonItem } from '@ionic/react';

interface Props {
  children: React.ReactNode;
}

const Coins = ({ children }: Props) => {
  return (
    <IonCard color="success">
      <IonCardHeader>
        <IonCardSubtitle>Devocoins</IonCardSubtitle>
      </IonCardHeader>
      <IonItem button color="success" href="#">
        <IonCardContent>
          <h1>
            <strong>{`${children} Ð`}</strong>
          </h1>
        </IonCardContent>
      </IonItem>
    </IonCard>
  );
};

export default Coins;
