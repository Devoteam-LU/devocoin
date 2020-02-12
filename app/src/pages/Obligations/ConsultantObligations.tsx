import React, { ReactNode } from 'react';
import { IonItemOption, IonIcon } from '@ionic/react';
import { newContextComponents } from '@drizzle/react-components';
import { archive, archiveSharp } from 'ionicons/icons';
import getObligations from 'mocks/api/getObligations';
import ObligationsList from 'components/ObligationsList';
import { useDrizzle, useDrizzleState } from 'utils/drizzleHooks';
import { DrizzleContractForm } from 'common/types';
import Obligations from '.';

interface Props {
  children?: ReactNode;
}

const { ContractForm } = newContextComponents;

const ConsultantObligations = ({ children }: Props) => {
  const { drizzle } = useDrizzle();
  const drizzleState = useDrizzleState();
  const obligations = getObligations();

  return (
    <Obligations>
      <ObligationsList
        obligations={obligations}
        startOption={
          <ContractForm
            render={({ handleSubmit }: DrizzleContractForm) => (
              <IonItemOption color="danger" onClick={handleSubmit}>
                <IonIcon slot="start" size="large" ios={archive} md={archiveSharp} />
              </IonItemOption>
            )}
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Obligation"
            method="archive"
          />
        }
        endOption={
          <ContractForm
            render={({ handleSubmit }: DrizzleContractForm) => (
              <IonItemOption color="success" onClick={handleSubmit}>
                Complete
              </IonItemOption>
            )}
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Obligation"
            method="complete"
          />
        }
      />
      {children}
    </Obligations>
  );
};

export default ConsultantObligations;
