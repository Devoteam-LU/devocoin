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
import { home, wallet, calendar, homeSharp, walletSharp, calendarSharp } from 'ionicons/icons';

const Navigation = () => (
  <IonMenu contentId="mainContent">
    <IonHeader>
      <IonToolbar />
    </IonHeader>
    <IonContent>
      <IonList>
        <IonMenuToggle autoHide={false}>
          <IonItem routerLink="/">
            <IonIcon slot="start" ios={home} md={homeSharp} />
            <IonLabel>Home</IonLabel>
          </IonItem>
        </IonMenuToggle>
        <IonMenuToggle autoHide={false}>
          <IonItem routerLink="/wallet">
            <IonIcon slot="start" ios={wallet} md={walletSharp} />
            <IonLabel>Wallet</IonLabel>
          </IonItem>
        </IonMenuToggle>
        <IonMenuToggle autoHide={false}>
          <IonItem routerLink="/obligations">
            <IonIcon slot="start" ios={calendar} md={calendarSharp} />
            <IonLabel>Obligations</IonLabel>
          </IonItem>
        </IonMenuToggle>
      </IonList>
    </IonContent>
  </IonMenu>
);

export default Navigation;
