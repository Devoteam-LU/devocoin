import React from 'react';
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
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonBadge,
  IonAvatar 
} from '@ionic/react';
import {
    menu,
    addCircle,
    send,
    search,
    ribbon
} from 'ionicons/icons';
import { IonRouterOutlet } from '@ionic/react';

interface IPageProps {
  children: React.ReactNode;
  title: React.ReactNode;
}

const Page = ({ children, title }: IPageProps) => (
  <IonPage>
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
    <IonTabs>
        <IonRouterOutlet>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
            <IonTabButton tab="ribbon">
                <IonIcon icon={ribbon} />
                <IonBadge>6</IonBadge>
            </IonTabButton>
            <IonTabButton tab="search">
                <IonIcon icon={search} />
            </IonTabButton>
            <IonTabButton tab="add">
                <IonIcon icon={addCircle} size="large" color="primary" />
            </IonTabButton>
            <IonTabButton tab="send">
                <IonIcon icon={send} />
            </IonTabButton>
            <IonTabButton tab="profile">
                <IonAvatar >
                    <img src="https://avatars2.githubusercontent.com/u/19812642?s=460&v=4" alt="user profile" />
                </IonAvatar>
            </IonTabButton>
        </IonTabBar>
    </IonTabs>
  </IonPage>
);

export default Page;
