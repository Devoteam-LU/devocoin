import { drizzleConnect } from '@drizzle/react-plugin';
import Home from 'components/Home';

const mapStateToProps = ({
  accounts,
  contracts: { SimpleStorage, DevocoinToken },
  drizzleStatus,
}) => ({
  accounts,
  SimpleStorage,
  DevocoinToken,
  drizzleStatus,
});

const DrizzleConnector = drizzleConnect(Home, mapStateToProps);

export default DrizzleConnector;
