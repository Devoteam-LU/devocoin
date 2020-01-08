import { drizzleConnect } from '@drizzle/react-plugin';
import MyComponent from 'components/MyComponent';

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

const DrizzleConnector = drizzleConnect(MyComponent, mapStateToProps);

export default DrizzleConnector;
