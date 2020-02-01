import React from 'react';
import { IonSplitPane, IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Drizzle } from '@drizzle/store';
import { drizzleReactHooks } from '@drizzle/react-plugin';
import drizzleOptions from 'utils/drizzleOptions';
import Home from 'pages/Home';
import Wallet from 'pages/Wallet';
import OfficerObligations from 'pages/Obligations/OfficerObligations';
import ConsultantObligations from 'pages/Obligations/ConsultantObligations';
import Navigation from 'layouts/Navigation';
import Loading from 'components/Loading';
import { Route } from 'react-router';
import getUser from 'mocks/api/getUser';
import { UserGroup } from 'common/types';
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
import './darkMode.css';

const drizzle = new Drizzle(drizzleOptions);
const { DrizzleProvider } = drizzleReactHooks;

const App = () => {
  const { userGroup } = getUser();

  if (userGroup === UserGroup.Officer) {
    document.body.classList.toggle('dark', true);
  }

  return (
    <DrizzleProvider drizzle={drizzle}>
      <IonApp>
        <Loading>
          <IonReactRouter>
            <IonSplitPane contentId="mainContent">
              <Navigation />
              <IonRouterOutlet id="mainContent">
                <Route exact path="/" component={Home} />
                <Route exact path="/wallet" component={Wallet} />
                <Route
                  exact
                  path="/obligations"
                  component={UserGroup.Officer ? OfficerObligations : ConsultantObligations}
                />
              </IonRouterOutlet>
            </IonSplitPane>
          </IonReactRouter>
        </Loading>
      </IonApp>
    </DrizzleProvider>
  );
};

export default App;
