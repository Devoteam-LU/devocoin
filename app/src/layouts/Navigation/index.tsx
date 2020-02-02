import React from 'react';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonMenuToggle,
} from '@ionic/react';
import { add } from 'ionicons/icons';

const Navigation = () => (
  <IonMenu contentId="mainContent" type="push">
    <IonHeader>
      <IonToolbar />
    </IonHeader>
    <IonContent>
      <IonList>
        <IonMenuToggle autoHide={false}>
          <IonItem routerLink="/">
            <IonIcon slot="start" icon={add} />
            <IonLabel>Home</IonLabel>
          </IonItem>
        </IonMenuToggle>
        <IonMenuToggle autoHide={false}>
          <IonItem routerLink="/wallet">
            <IonIcon slot="start" icon={add} />
            <IonLabel>Wallet</IonLabel>
          </IonItem>
        </IonMenuToggle>
        <IonMenuToggle autoHide={false}>
          <IonItem routerLink="/obligations">
            <IonIcon slot="start" icon={add} />
            <IonLabel>Obligations</IonLabel>
          </IonItem>
        </IonMenuToggle>
      </IonList>
    </IonContent>
  </IonMenu>
);

export default Navigation;
