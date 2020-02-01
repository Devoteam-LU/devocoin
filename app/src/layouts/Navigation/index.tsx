import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/obligations">
          <IonMenuToggle autoHide={false}>
            <IonItem button>
              <IonIcon slot="start" icon={add} />
              <IonLabel>Obligations</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </Link>
      </IonList>
    </IonContent>
  </IonMenu>
);

export default Navigation;
