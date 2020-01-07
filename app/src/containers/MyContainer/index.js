import { drizzleConnect } from "@drizzle/react-plugin";
import MyComponent from "components/MyComponent";

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    SimpleStorage: state.contracts.SimpleStorage,
    DevocoinToken: state.contracts.DevocoinToken,
    drizzleStatus: state.drizzleStatus,
  };
};

const MyContainer = drizzleConnect(MyComponent, mapStateToProps);

export default MyContainer;
