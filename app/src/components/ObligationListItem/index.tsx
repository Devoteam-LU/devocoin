import React from 'react';
import { Obligation, ObligationListItemOptions } from 'common/types';
import { IonBadge, IonItem, IonItemOptions, IonItemSliding, IonLabel } from '@ionic/react';

interface Props extends Obligation, ObligationListItemOptions {}

const ObligationListItem = ({
  title,
  description,
  dueDate,
  value,
  startOption,
  endOption,
}: Props) => {
  return (
    <IonItemSliding>
      {startOption && <IonItemOptions side="start">{startOption}</IonItemOptions>}
      <IonItem button>
        <IonLabel>
          <em>{new Date(dueDate).toLocaleDateString()}</em>
          <h2>{title}</h2>
          <p>{description}</p>
        </IonLabel>
        <IonBadge slot="end">{`${value} Ð`}</IonBadge>
      </IonItem>
      {endOption && <IonItemOptions side="end">{endOption}</IonItemOptions>}
    </IonItemSliding>
  );
};

export default ObligationListItem;
