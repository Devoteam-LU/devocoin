import React, { ReactNode } from 'react';
import { IonContent } from '@ionic/react';
import Page from 'layouts/Page';

interface Props {
  children: ReactNode;
}

const Obligations = ({ children }: Props) => {
  return (
    <Page title="Obligations">
      <IonContent>{children}</IonContent>
    </Page>
  );
};

export default Obligations;
