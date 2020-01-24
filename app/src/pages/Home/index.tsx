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
} from '@ionic/react';
import Page from 'layouts/Page';
import getObligations from 'mocks/api/getObligations';

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
                  Archive
                </IonItemOption>
              </IonItemOptions>
              <IonItem button>
                <IonLabel>
                  <h2>{new Date(dueDate).toLocaleDateString()}</h2>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </IonLabel>
                <IonBadge slot="end">{`${value} Devocoin`}</IonBadge>
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
    </Page>
  );
};

export default Home;
