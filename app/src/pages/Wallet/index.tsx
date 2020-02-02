import React from 'react';
import { IonButton } from '@ionic/react';
import QRCode from 'qrcode.react';
import { newContextComponents } from '@drizzle/react-components';
import { useDrizzle, useDrizzleState } from 'utils/drizzleHooks';
import Page from 'layouts/Page';

const { ContractData } = newContextComponents;

const filterTransactions = ({ status }: any): boolean => status === 'success';
const mapTransactions = ({
  receipt: {
    events: {
      Transfer: {
        returnValues: { to, value },
      },
    },
  },
}: any) => (
  <div>
    {to}: {value}
  </div>
);

const Wallet = () => {
  const { drizzle } = useDrizzle();
  const drizzleState = useDrizzleState();
  const { accounts, transactions } = drizzleState;

  return (
    <Page title="Wallet">
      <div>
        <h2>My Balance</h2>
        <ContractData
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="DevocoinToken"
          method="balanceOf"
          methodArgs={[accounts[0]]}
        />
        <ContractData
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="DevocoinToken"
          method="symbol"
          hideIndicator
        />
        <br />
        <IonButton>SEND</IonButton>
        <IonButton>REQUEST</IonButton>
      </div>
      <div>
        {accounts[0]}
        <br />
        <br />
        <QRCode value={accounts[0]} />
      </div>
      <div>
        <h2>Transactions</h2>
        {Object.values(transactions)
          .filter(filterTransactions)
          .map(mapTransactions)}
      </div>
    </Page>
  );
};

export default Wallet;
