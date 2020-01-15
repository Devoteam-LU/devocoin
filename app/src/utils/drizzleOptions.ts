import Web3 from 'web3';
import SimpleStorage from '../contracts/SimpleStorage.json';
import ComplexStorage from '../contracts/ComplexStorage.json';
import DevocoinToken from '../contracts/DevocoinToken.json';
import { IDrizzleOptions } from '@drizzle/store';

interface IDrizzleOptionsCustom extends IDrizzleOptions {
  contracts: any;
}

const drizzleOptions: IDrizzleOptionsCustom = {
  web3: {
    customProvider: new Web3('ws://localhost:8545'),
  },
  contracts: [SimpleStorage, ComplexStorage, DevocoinToken],
  events: {
    SimpleStorage: ['StorageSet'],
  },
  polls: {
    accounts: 1500,
  },
};

export default drizzleOptions;
