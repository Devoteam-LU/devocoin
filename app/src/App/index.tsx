import React, { Suspense } from 'react';
import { IonSplitPane, IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Drizzle } from '@drizzle/store';
import { drizzleReactHooks } from '@drizzle/react-plugin';
import drizzleOptions from 'utils/drizzleOptions';
import Navigation from 'layouts/Navigation';
import SharedRoutes from 'routes/SharedRoutes';
import Loading from 'components/Loading';
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
import OfficerRoutes from 'routes/OfficerRoutes';
import { Route } from 'react-router';

const drizzle = new Drizzle(drizzleOptions);
const { DrizzleProvider } = drizzleReactHooks;

const App = () => (
  <DrizzleProvider drizzle={drizzle}>
    <IonApp>
      <Loading>
        <IonReactRouter>
          <Suspense fallback="...loading">
            <IonSplitPane contentId="mainContent">
              <Navigation />
              <IonRouterOutlet id="mainContent">
                <Route path="*">
                  <SharedRoutes />
                  <OfficerRoutes />
                </Route>
              </IonRouterOutlet>
            </IonSplitPane>
          </Suspense>
        </IonReactRouter>
      </Loading>
    </IonApp>
  </DrizzleProvider>
);

export default App;
