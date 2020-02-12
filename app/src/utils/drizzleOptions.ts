import Web3 from 'web3';
import { IDrizzleOptions } from '@drizzle/store';
import SimpleStorage from '../contracts/SimpleStorage.json';
import ComplexStorage from '../contracts/ComplexStorage.json';
import DevocoinToken from '../contracts/DevocoinToken.json';
import Obligation from '../contracts/Obligation.json';
import ObligationRegistry from '../contracts/ObligationRegistry.json';

interface IDrizzleOptionsCustom extends IDrizzleOptions {
  contracts: any;
}

const drizzleOptions: IDrizzleOptionsCustom = {
  web3: {
    customProvider: new Web3('ws://localhost:8545'),
  },
  contracts: [SimpleStorage, ComplexStorage, DevocoinToken, Obligation, ObligationRegistry],
  events: {
    SimpleStorage: ['StorageSet'],
    Obligation: [
      'ObligationCompleted',
      'ObligationApproved',
      'ObligationRejected',
      'ObligationArchived',
    ],
  },
  polls: {
    accounts: 1500,
  },
};

export default drizzleOptions;
