import React from 'react';
import { IonButton } from '@ionic/react';
import QRCode from 'qrcode.react';
import { useDrizzleState } from 'utils/drizzleHooks';
import Page from 'layouts/Page';
import Coins from 'components/Coins';

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
  const drizzleState = useDrizzleState();
  const { accounts, transactions } = drizzleState;

  return (
    <Page title="Wallet">
      <div>
        <Coins />
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
