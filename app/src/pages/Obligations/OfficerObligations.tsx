import React, { useState, useEffect } from 'react';
import { IonItemOption } from '@ionic/react';
import { newContextComponents } from '@drizzle/react-components';
import ObligationsList from 'components/ObligationsList';
import { useDrizzle, useDrizzleState } from 'utils/drizzleHooks';
import { DrizzleContractForm } from 'common/types';
import ConsultantObligations from './ConsultantObligations';

const { ContractForm, ContractData } = newContextComponents;

const getObligations = async (drizzle: any, drizzleState: any, setObligations: any) => {
  const obligations = await drizzle.contracts.ObligationRegistry.methods
    .getObligationsByBeneficiary(drizzleState.accounts[0])
    .call();
  setObligations(obligations);
};

const createObligation = async (drizzle: any, drizzleState: any, setAddress: any) => {
  const obligations = await drizzle.contracts.ObligationRegistry.methods
    .createObligation(3, drizzleState.accounts[0])
    .call();
  setAddress(obligations);
};

const OfficerObligations = () => {
  const { drizzle } = useDrizzle();
  const drizzleState = useDrizzleState();
  const [obligations, setObligations] = useState<any[]>([]);
  const [address, setAddress] = useState('');

  useEffect(() => {
    getObligations(drizzle, drizzleState, setObligations);
  }, [address, drizzle, drizzleState]);

  useEffect(() => {
    createObligation(drizzle, drizzleState, setAddress);
  }, [drizzle, drizzleState]);

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
      Create Obligation
      <ContractForm
        drizzle={drizzle}
        drizzleState={drizzleState}
        contract="ObligationRegistry"
        method="createObligation"
      />
      <ContractData
        drizzle={drizzle}
        drizzleState={drizzleState}
        contract="ObligationRegistry"
        method="getObligationsByBeneficiary"
        methodArgs={[drizzleState.accounts[0]]}
      />
    </ConsultantObligations>
  );
};

export default OfficerObligations;
