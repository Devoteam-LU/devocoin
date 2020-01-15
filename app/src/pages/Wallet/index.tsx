import React from 'react';
import QRCode from 'qrcode.react';
import { drizzleReactHooks } from '@drizzle/react-plugin';
import { newContextComponents } from '@drizzle/react-components';

const { useDrizzle, useDrizzleState } = drizzleReactHooks;
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
  const drizzleState = useDrizzleState((state: any) => state);
  const { accounts, transactions } = drizzleState;
  
  return (
    <div className="App">
      <div className="section">
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
        <button>send</button>
        <button>request</button>
      </div>
      <div className="section">
        {accounts[0]}
        <br />
        <br />
        <QRCode value={accounts[0]} />
      </div>
      <div className="section">
        <h2>Transactions</h2>
        {Object.values(transactions)
          .filter(filterTransactions)
          .map(mapTransactions)}
      </div>
    </div>
  );
};

export default Wallet;
