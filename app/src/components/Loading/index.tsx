import React from 'react';
import { drizzleReactHooks } from '@drizzle/react-plugin';

const { useDrizzleState } = drizzleReactHooks;

interface Props {
  children: React.ReactNode;
}

const Loading = ({ children }: Props): JSX.Element => {
  const { drizzleStatus } = useDrizzleState((drizzleState: any) => drizzleState);
  return <>{drizzleStatus.initialized ? children : '...loading'}</>;
};

export default Loading;
