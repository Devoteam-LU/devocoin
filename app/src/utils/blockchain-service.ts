import Web3 from 'web3';

const web3Service = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));


export default web3Service;
