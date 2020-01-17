import React from 'react';
import { IonPage, IonHeader, IonTitle, IonToolbar, IonContent } from '@ionic/react';

interface IPageProps {
  children: React.ReactNode;
  title: React.ReactNode;
}

const Page = ({ children, title }: IPageProps) => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>{children}</IonContent>
  </IonPage>
);

export default Page;
