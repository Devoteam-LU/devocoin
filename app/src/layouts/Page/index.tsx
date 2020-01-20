import React from 'react';
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuToggle,
  IonButton,
  IonIcon,
  IonContent,
} from '@ionic/react';
import { menu } from 'ionicons/icons';

interface IPageProps {
  children: React.ReactNode;
  title: React.ReactNode;
}

const Page = ({ children, title }: IPageProps) => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuToggle>
            <IonButton>
              <IonIcon slot="icon-only" icon={menu}></IonIcon>
            </IonButton>
          </IonMenuToggle>
        </IonButtons>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>{children}</IonContent>
  </>
);

export default Page;
