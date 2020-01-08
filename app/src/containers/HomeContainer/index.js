import { drizzleConnect } from '@drizzle/react-plugin';
import Home from 'pages/Home';

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

const HomeContainer = drizzleConnect(Home, mapStateToProps);

export default HomeContainer;
