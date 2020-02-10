import React from 'react';
import { IonItemOption } from '@ionic/react';
import { newContextComponents } from '@drizzle/react-components';
import getObligationsPendingApproval from 'mocks/api/getObligationsPendingApproval';
import ObligationsList from 'components/ObligationsList';
import { useDrizzle, useDrizzleState } from 'utils/drizzleHooks';
import { DrizzleContractForm } from 'common/types';
import ConsultantObligations from './ConsultantObligations';

const { ContractForm } = newContextComponents;

const OfficerObligations = () => {
  const { drizzle } = useDrizzle();
  const drizzleState = useDrizzleState();

  const obligations = getObligationsPendingApproval();
  return (
    <ConsultantObligations>
      <ObligationsList
        title="Obligations pending my approval"
        obligations={obligations}
        startOption={
          <ContractForm
            render={({ handleSubmit }: DrizzleContractForm) => (
              <IonItemOption color="danger" onClick={handleSubmit}>
                Reject
              </IonItemOption>
            )}
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Obligation"
            method="reject"
          />
        }
        endOption={
          <ContractForm
            render={({ handleSubmit }: DrizzleContractForm) => (
              <IonItemOption color="success" onClick={handleSubmit}>
                Approve
              </IonItemOption>
            )}
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Obligation"
            method="approve"
          />
        }
      />
    </ConsultantObligations>
  );
};

export default OfficerObligations;
