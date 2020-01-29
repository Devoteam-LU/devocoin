import { Obligation } from 'common/types';
import { archive } from 'ionicons/icons';
import React from 'react';

import {
  IonBadge,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
} from '@ionic/react';

interface Props extends Obligation {}

const ObligationListItem = ({ title, description, dueDate, value }: Props) => {
  return (
    <IonItemSliding>
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
  );
};

export default ObligationListItem;
