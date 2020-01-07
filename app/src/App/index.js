import React from 'react';
import { DrizzleProvider } from '@drizzle/react-plugin';
import { LoadingContainer } from '@drizzle/react-components';

import './App.css';

import drizzleOptions from 'utils/drizzleOptions';
import MyContainer from 'containers/MyContainer';

const App = () => (
  <DrizzleProvider options={drizzleOptions}>
    <LoadingContainer>
      <MyContainer />
    </LoadingContainer>
  </DrizzleProvider>
);

export default App;
