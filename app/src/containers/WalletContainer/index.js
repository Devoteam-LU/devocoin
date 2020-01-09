import { drizzleConnect } from '@drizzle/react-plugin';
import Wallet from 'pages/Wallet';

const mapStateToProps = ({ accounts, contracts: { DevocoinToken }, transactions }) => ({
  accounts,
  DevocoinToken,
  transactions,
});

const WalletContainer = drizzleConnect(Wallet, mapStateToProps);

export default WalletContainer;
