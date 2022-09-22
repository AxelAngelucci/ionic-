import React, {useRef, useContext, Fragment, useState} from "react";
import { IonButton, IonButtons, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToast, IonToolbar } from "@ionic/react";
import { useHistory } from "react-router-dom";

import { ActivitiesContext, ActivityType } from "../../data/activities-context";

const AddActivity: React.FC = () => {

    const history = useHistory();

    const [toastMsg, setToastMsg] = useState<string>();

    const activitiesContext = useContext(ActivitiesContext);

    const addActivity = ()=>{
        const activityType = activityTypeInput.current?.value as ActivityType;
        const title = titleInput.current?.value as string;
        const description = descriptionInput.current?.value as string;
        const date = new Date(hourInput.current?.value as string);
        const hour = date.getHours() + ":" + date.getMinutes();
        if(activityType && title && description && date && hour){
            activitiesContext.addActivity(title, description, hour, activityType);
            history.replace('/all-activities');
            setToastMsg("Add activity success");
        }else{
            setToastMsg("Please complete all fields");
        }
    }

    const activityTypeInput = useRef<HTMLIonSegmentElement>(null);
    const titleInput= useRef<HTMLIonInputElement>(null);
    const descriptionInput= useRef<HTMLIonInputElement>(null);
    const hourInput= useRef<HTMLIonDatetimeElement>(null);

    

    return(
        <Fragment>
            <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                            <IonMenuButton/>
                        </IonButtons>
                    <IonTitle>All Activities</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol className="ion-text-center">
                            <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} ref={activityTypeInput}>
                                <IonSegmentButton value="work">
                                    <IonLabel>Work</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value="rest">
                                    <IonLabel>Rest</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value="sleep">
                                    <IonLabel>Sleep</IonLabel>
                                </IonSegmentButton>
                            </IonSegment>
                            <IonItem >
                                <IonLabel position="floating">Title</IonLabel>
                                <IonInput placeholder="Enter Activity Title" type="text" ref={titleInput}/>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Description</IonLabel>
                                <IonInput placeholder="Enter Activity Title" type="text" ref={descriptionInput}/>
                            </IonItem>
                            <IonItem lines="none">
                                <IonLabel position="floating">Starting hour</IonLabel>
                                <IonDatetime presentation="time"
                                             display-format="h:MM A" 
                                             picker-format="h:MM A" 
                                             value={new Date().toISOString()}
                                             ref={hourInput}
                                />
                            </IonItem>
                            <IonButton className="ion-text-center ion-margin" expand="block" fill="outline" onClick={addActivity}>
                                Add Activity
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
        <IonToast isOpen={!!toastMsg} duration={4000} onDidDismiss={() => setToastMsg('')} message={toastMsg} color="medium"/>
        </Fragment>
        
    );
}
export default AddActivity;