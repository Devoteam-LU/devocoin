import React from 'react';
import {
  IonList,
  IonItem,
  IonLabel,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonListHeader,
  IonBadge,
  IonIcon,
} from '@ionic/react';
import { archive } from 'ionicons/icons';
import { Obligation } from 'common/types';

interface Props {
  obligations: Obligation[];
  title?: string;
}

const ObligationsList = ({ obligations, title = 'Upcoming obligations' }: Props) => {
  return (
    <IonList lines="full">
      <IonListHeader>
        <IonLabel>{title}</IonLabel>
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
  );
};

export default ObligationsList;
