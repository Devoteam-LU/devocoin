import React from 'react';
import { AccountData } from '@drizzle/react-components';

const Wallet = ({ transactions }) => (
  <div className="App">
    <div className="section">
      <h2>My Balance</h2>
      <AccountData accountIndex={0} units="ether" precision={3} />
    </div>
    <div>
      <button>send</button>
      <button>request</button>
    </div>
    <div className="section">
      <h2>Active Account</h2>
      <AccountData accountIndex={0} units="ether" precision={3} />
    </div>
    <div className="section">
      <h2>Transactions</h2>
      {Object.values(transactions)
        .filter(({ status }) => status === 'success')
        .map(({ receipt: { events: { Transfer: { returnValues: { to, value } } } } }) => (
          <div>
            {to}: {value}
          </div>
        ))}
    </div>
  </div>
);

export default Wallet;
