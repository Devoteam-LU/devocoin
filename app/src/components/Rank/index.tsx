import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonItem } from '@ionic/react';

interface Props {
  children: React.ReactNode;
}

const Rank = ({ children }: Props) => {
  return (
    <IonCard color="tertiary">
      <IonCardHeader>
        <IonCardSubtitle>Rank</IonCardSubtitle>
      </IonCardHeader>
      <IonItem button color="tertiary" href="#">
        <IonCardContent>
          <h1>
            <strong>{children}</strong>
          </h1>
        </IonCardContent>
      </IonItem>
    </IonCard>
  );
};

export default Rank;
