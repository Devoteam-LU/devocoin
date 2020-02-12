import React, {ReactNode} from 'react';
import { IonLoading } from '@ionic/react';
import { useDrizzleState } from 'utils/drizzleHooks';

interface Props {
  children: ReactNode;
}

const Loading = ({ children }: Props) => {
  const { drizzleStatus } = useDrizzleState();

  return (
    <>
      <IonLoading isOpen={!drizzleStatus.initialized} message={'Connecting to the network...'} />
      {drizzleStatus.initialized && children}
    </>
  );
};

export default Loading;
