import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { analyticsOutline, addOutline } from "ionicons/icons"

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AllActivities from './pages/AllActivities';
import AddActivity from './pages/AddActivity/AddActivity';
import { ActivitiesContextProvider } from './data/ActivitiesContextProvider';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    
    <IonReactRouter>
    <IonMenu contentId="main-content" side='start'>
        <IonHeader>
          <IonToolbar>
            
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonMenuToggle>
            <IonList>
              <IonItem routerLink='/all-activities'>
                <IonIcon icon={analyticsOutline} color="medium" slot="start"></IonIcon>
                <IonLabel>All Activities</IonLabel>
              </IonItem>
            </IonList>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonList>
              <IonItem routerLink='/add-activity'>
                <IonIcon icon={addOutline} color="medium" slot="start"></IonIcon>
                <IonLabel>Add Activity</IonLabel>
              </IonItem>
            </IonList>
          </IonMenuToggle>
        </IonContent>
      </IonMenu>
      <ActivitiesContextProvider>
        <IonRouterOutlet id='main-content'>
          <Route exact path="/all-activities" component={AllActivities}/>
          <Route exact path="/add-activity" component={AddActivity}/>
          <Redirect to="/all-activities" />
        </IonRouterOutlet>
      </ActivitiesContextProvider>
      
    </IonReactRouter>
  </IonApp>
);

export default App;
