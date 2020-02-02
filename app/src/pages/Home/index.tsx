import React from 'react';
import { IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router';
import { IonContent, IonItemOption, IonIcon, IonTabs, IonTabBar, IonTabButton, IonLabel, IonBadge, IonAvatar } from '@ionic/react';
import getObligations from 'mocks/api/getObligations';
import Page from 'layouts/Page';
import ObligationsList from 'components/ObligationsList';
import { archive, addCircle, send, search, ribbon } from 'ionicons/icons';

const Home = () => {
    const obligations = getObligations();
    return (
        <Page title="Home">
            <IonContent>
                <ObligationsList
                    obligations={obligations}
                    startOption={
                        <IonItemOption color="danger" onClick={() => { }}>
                            <IonIcon slot="start" icon={archive} size="large" />
                        </IonItemOption>
                    }
                    endOption={
                        <IonItemOption color="success" onClick={() => { }}>
                            Complete
            </IonItemOption>
                    }
                />
            </IonContent>
            <IonTabs>
                <IonRouterOutlet>

                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="ribbon">
                        <IonIcon icon={ribbon} size="large" />
                        <IonBadge>6</IonBadge>
                    </IonTabButton>

                    <IonTabButton tab="search">
                        <IonIcon icon={search} size="large"  />
                  
                    </IonTabButton>

                    <IonTabButton tab="add">
                        <IonIcon icon={addCircle} size="large" />
                    </IonTabButton>

                    <IonTabButton tab="send">
                        <IonIcon icon={send} size="large" />
                    </IonTabButton>
                    <IonTabButton tab="profile">
                        <IonAvatar>
                            <img src="../../../assets/logo.png" />
                        </IonAvatar>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </Page>
    );
};

export default Home;