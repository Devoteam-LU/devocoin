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
  IonMenuToggle,
} from '@ionic/react';
import { add } from 'ionicons/icons';

const Navigation = () => (
  <IonMenu contentId="mainContent" type="push">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonListHeader>Navigate</IonListHeader>
        <Link to="/">
          <IonMenuToggle autoHide={false}>
            <IonItem button href="/">
              <IonIcon slot="start" icon={add} />
              <IonLabel>Home</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </Link>
        <Link to="/wallet">
          <IonMenuToggle autoHide={false}>
            <IonItem button>
              <IonIcon slot="start" icon={add} />
              <IonLabel>Wallet</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </Link>
      </IonList>
    </IonContent>
  </IonMenu>
);

export default Navigation;
