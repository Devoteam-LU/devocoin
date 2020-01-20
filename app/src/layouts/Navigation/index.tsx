import React from 'react';
import { Link } from 'react-router-dom';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { add } from 'ionicons/icons';

const Navigation = () => (
  <IonMenu contentId="mainContent">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonListHeader>Navigate</IonListHeader>
        <Link to="/">
          <IonItem button href="/">
            <IonIcon slot="start" icon={add}></IonIcon>
            <IonLabel>Home</IonLabel>
          </IonItem>
        </Link>
        <Link to="/wallet">
          <IonItem button>
            <IonIcon slot="start" icon={add}></IonIcon>
            <IonLabel>Wallet</IonLabel>
          </IonItem>
        </Link>
      </IonList>
    </IonContent>
  </IonMenu>
);

export default Navigation;
