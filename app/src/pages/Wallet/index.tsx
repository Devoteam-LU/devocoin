import React from 'react';
import { IonButton } from '@ionic/react';
import QRCode from 'qrcode.react';
<<<<<<< HEAD
import { newContextComponents } from '@drizzle/react-components';
import { useDrizzle, useDrizzleState } from 'utils/drizzleHooks';
import web3Service from 'utils/blockchain-service'
import Page from 'layouts/Page';

=======
import { useDrizzleState } from 'utils/drizzleHooks';
import Page from 'layouts/Page';
import Coins from 'components/CoinsCard';
>>>>>>> feature/bottom-navigation-bar

class WalletComponent extends React.Component {
    transactionList = { data: [] };

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
  const drizzleState = useDrizzleState();
    const { accounts, transactions} = drizzleState;

  
    var myAddr = accounts[0];
    var foo: string[] = ['a'];
    let transac = web3Service.eth.getBlockNumber().then(function (currentBlock) {
        for (var i = currentBlock; i >= 0; --i) {
            web3Service.eth.getBlock(currentBlock, true).then(function (block) {
                block.transactions.forEach(function (e) {
                    if (myAddr == e.from) {
                        if (e.from != e.to)
                            foo.push(e.hash);
                        console.log(e.hash);
                    }
                    if (myAddr == e.to) {
                        if (e.from != e.to)
                            foo.push(e.hash);
                        console.log(e.hash);
                    }
                });
            });
        }
        return foo;
    })

    var p3 = Promise.resolve(transac);
    console.log('value', p3);

  return (
    <Page title="Wallet">
      <div>
<<<<<<< HEAD
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
        <IonButton >SEND</IonButton>
=======
        <Coins />
        <IonButton>SEND</IonButton>
>>>>>>> feature/bottom-navigation-bar
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
}
export default Wallet;
