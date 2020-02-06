import React, { ReactNode } from 'react';
import { IonItemOption, IonIcon } from '@ionic/react';
import getObligations from 'mocks/api/getObligations';
import ObligationsList from 'components/ObligationsList';
import { archive } from 'ionicons/icons';
import Obligations from '.';

interface Props {
  children?: ReactNode;
}

const ConsultantObligations = ({ children }: Props) => {
  const obligations = getObligations();
  return (
    <Obligations>
      <ObligationsList
        obligations={obligations}
        startOption={
          <IonItemOption color="danger" onClick={() => {}}>
            <IonIcon slot="start" icon={archive} size="large" />
          </IonItemOption>
        }
        endOption={
          <IonItemOption color="success" onClick={() => {}}>
            Complete
          </IonItemOption>
        }
      />
      {children}
    </Obligations>
  );
};

export default ConsultantObligations;
