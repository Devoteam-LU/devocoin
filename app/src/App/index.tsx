import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { IonSplitPane, IonApp, IonPage } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Drizzle } from '@drizzle/store';
import { drizzleReactHooks } from '@drizzle/react-plugin';
import drizzleOptions from 'utils/drizzleOptions';
import Loading from 'components/Loading';
import Navigation from 'layouts/Navigation';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

const drizzle = new Drizzle(drizzleOptions);
const { DrizzleProvider } = drizzleReactHooks;

const Home = React.lazy(() => import('pages/Home'));
const Wallet = React.lazy(() => import('pages/Wallet'));

const App = () => (
  <DrizzleProvider drizzle={drizzle}>
    <IonApp>
      <Loading>
        <IonReactRouter>
          <Suspense fallback="...loading">
            <IonSplitPane contentId="mainContent">
              <Navigation />
              <IonPage id="mainContent">
                <Route exact path="/" component={Home} />
                <Route exact path="/wallet" component={Wallet} />
              </IonPage>
            </IonSplitPane>
          </Suspense>
        </IonReactRouter>
      </Loading>
    </IonApp>
  </DrizzleProvider>
);

export default App;
