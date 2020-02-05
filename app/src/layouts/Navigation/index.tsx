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
import { home, wallet, calendar } from 'ionicons/icons';

const Navigation = () => (
  <IonMenu contentId="mainContent" type="push">
    <IonHeader>
      <IonToolbar />
    </IonHeader>
    <IonContent>
      <IonList>
        <IonMenuToggle autoHide={false}>
          <IonItem routerLink="/">
            <IonIcon slot="start" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonItem>
        </IonMenuToggle>
        <IonMenuToggle autoHide={false}>
          <IonItem routerLink="/wallet">
            <IonIcon slot="start" icon={wallet} />
            <IonLabel>Wallet</IonLabel>
          </IonItem>
        </IonMenuToggle>
        <IonMenuToggle autoHide={false}>
          <IonItem routerLink="/obligations">
            <IonIcon slot="start" icon={calendar} />
            <IonLabel>Obligations</IonLabel>
          </IonItem>
        </IonMenuToggle>
      </IonList>
    </IonContent>
  </IonMenu>
);

export default Navigation;
