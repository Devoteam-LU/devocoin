import React from 'react';
import { IonItemOption } from '@ionic/react';
import getObligations from 'mocks/api/getObligations';
import ObligationsList from 'components/ObligationsList';
import ConsultantObligations from './ConsultantObligations';

const OfficerObligations = () => {
  const obligations = getObligations();
  return (
    <ConsultantObligations>
      <ObligationsList
        title="Obligations pending my approval"
        obligations={obligations}
        startOption={
          <IonItemOption color="danger" onClick={() => {}}>
            Reject
          </IonItemOption>
        }
        endOption={
          <IonItemOption color="success" onClick={() => {}}>
            Approve
          </IonItemOption>
        }
      />
    </ConsultantObligations>
  );
};

export default OfficerObligations;
