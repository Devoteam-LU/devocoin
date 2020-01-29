import React from 'react';
import { IonList, IonLabel, IonListHeader } from '@ionic/react';
import { Obligation } from 'common/types';
import renderObligationListItem from './mapObligationListItems';

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
      {obligations.map(renderObligationListItem)}
    </IonList>
  );
};

export default ObligationsList;
