import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent } from '@ionic/react';

interface Props {
  children: React.ReactNode;
}

const Rank = ({ children }: Props) => {
  return (
    <IonCard routerLink="/wallet" color="tertiary">
      <IonCardHeader>
        <IonCardSubtitle>Rank</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <h1>
          <strong>{children}</strong>
        </h1>
      </IonCardContent>
    </IonCard>
  );
};

export default Rank;
