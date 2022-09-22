import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonItem, IonRow } from '@ionic/react'
import React from 'react'
import { Activity } from '../../../data/activities-context';
import classes from "./ActivityCard.module.css";

interface Act {
    a: Activity
}

export const ActivityCard: React.FC<Act> = (props) => {
    
    return (
        <IonRow key={props.a.id}>
            <IonCol className="ion-text-center">
                <IonCard>
                    <img src={props.a.image} alt="Activity" />
                    <IonCardHeader>
                        <IonCardTitle>{props.a.hour}</IonCardTitle>
                        <IonCardSubtitle>{props.a.title}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <p>{props.a.description}</p>
                        <IonItem lines="none">
                            <IonButton fill="clear" className={classes.FullWidth}>Completed</IonButton>
                        </IonItem>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
    )
}
