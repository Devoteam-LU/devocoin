import React from 'react';
import {
  IonList,
  IonItem,
  IonLabel,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonContent,
  IonListHeader,
  IonBadge,
  IonIcon,
  IonFooter,
  IonToolbar,
  IonAvatar
} from '@ionic/react';
import { archive, addCircle, search, send, informationCircle } from 'ionicons/icons';
import getObligations from 'mocks/api/getObligations';
import Page from 'layouts/Page';

const Home = () => {
  const obligations = getObligations();
  return (
    <Page title="Home">
      <IonContent>
        <IonList lines="full">
          <IonListHeader>
            <IonLabel>Upcoming obligations</IonLabel>
          </IonListHeader>
          {obligations.map(({ title, description, dueDate, value }, index) => (
            <IonItemSliding key={index}>
              <IonItemOptions side="start">
                <IonItemOption color="danger" onClick={() => {}}>
                  <IonIcon slot="start" icon={archive} size="large" />
                </IonItemOption>
              </IonItemOptions>
              <IonItem button>
                <IonLabel>
                  <em>{new Date(dueDate).toLocaleDateString()}</em>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </IonLabel>
                <IonBadge slot="end">{`${value} Ð`}</IonBadge>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption color="success" onClick={() => {}}>
                  Complete
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
      </IonContent>
      <IonFooter>
         <IonToolbar>
                  <IonIcon icon={addCircle}></IonIcon>
                  <IonIcon icon={search}></IonIcon>
                  <IonIcon icon={addCircle}></IonIcon>
                  <IonIcon icon={send}></IonIcon>
                  <IonAvatar>
                      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                  </IonAvatar>
        </IonToolbar>
      </IonFooter>
    </Page>
  );
};

export default Home;
