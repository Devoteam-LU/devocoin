import React from 'react';
import { IonList, IonLabel, IonListHeader } from '@ionic/react';
import { Obligation, ObligationListItemOptions } from 'common/types';
import renderObligationListItem from './mapObligationListItems';

interface Props extends ObligationListItemOptions {
  obligations: Obligation[];
  title?: string;
}

const ObligationsList = ({
  obligations,
  startOption,
  endOption,
  title = 'Upcoming obligations',
}: Props) => {
  return (
    <IonList lines="full">
      <IonListHeader>
        <IonLabel>{title}</IonLabel>
      </IonListHeader>
      {obligations.map(renderObligationListItem({ startOption, endOption }))}
    </IonList>
  );
};

export default ObligationsList;
