import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonText,
} from '@ionic/react';
import { trophy, trophySharp } from 'ionicons/icons';
import getOrdinalSuffixOf from 'utils/getOrdinalSuffixOf';

interface Props {
  ordinal: number;
  outOf: number;
}

const Rank = ({ ordinal, outOf }: Props) => {
  return (
    <IonCard color="tertiary">
      <IonCardHeader color="inherit">
        <IonCardSubtitle>Rank</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonItem color="inherit" lines="none">
          <IonIcon slot="start" ios={trophy} md={trophySharp} />
          <h1>
            <strong>{`${ordinal}${getOrdinalSuffixOf(ordinal)}`}</strong>
          </h1>
          <IonText>{`\xa0\xa0\xa0/\xa0\xa0${outOf}`}</IonText>
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};

export default Rank;
