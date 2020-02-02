import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonIcon,
} from '@ionic/react';
import { trophy } from 'ionicons/icons';

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
        <IonItem button color="inherit" lines="none">
          <IonIcon slot="start" icon={trophy} />
          <h1>
            <strong>{children}</strong>
          </h1>
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};

export default Rank;
