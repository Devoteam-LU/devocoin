import React from 'react';
import { drizzleReactHooks } from '@drizzle/react-plugin';

const { useDrizzleState } = drizzleReactHooks;

const Loading = ({ children }) => {
  const drizzleStatus = useDrizzleState(({ drizzleStatus }) => drizzleStatus);
  return drizzleStatus.initialized ? <>{children}</> : '...loading';
};

export default Loading;
