import React from 'react';
import { drizzleReactHooks } from '@drizzle/react-plugin';

const { useDrizzleState } = drizzleReactHooks;

interface ILoadingProps {
  children: React.ReactNode;
}

const Loading = ({ children }: ILoadingProps): JSX.Element => {
  const { drizzleStatus } = useDrizzleState((drizzleState: any) => drizzleState);
  return <>{drizzleStatus.initialized ? children : '...loading'}</>;
};

export default Loading;
