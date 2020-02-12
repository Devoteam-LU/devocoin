import React, { ReactNode } from 'react';
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuToggle,
  IonButton,
  IonIcon,
  IonContent,
} from '@ionic/react';
import { menu, menuSharp } from 'ionicons/icons';

interface Props {
  children: ReactNode;
  title: ReactNode;
}

const Page = ({ children, title }: Props) => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuToggle>
            <IonButton>
              <IonIcon slot="icon-only" ios={menu} md={menuSharp}></IonIcon>
            </IonButton>
          </IonMenuToggle>
        </IonButtons>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>{children}</IonContent>
  </IonPage>
);

export default Page;
