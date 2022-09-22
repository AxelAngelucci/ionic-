import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonModal, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { Activity } from '../../../data/activities-context'

interface CompleteModalProps {
    activity: Activity;
    dismissModal: () => void;
}

export const CompleteModal: React.FC<CompleteModalProps> = (props) => {
  return (
    <IonModal>
        <IonGrid>
            <IonRow>
                <IonCol>
                    <img src={props.activity.image} alt="Activity" />
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonText>
                        <h1>{props.activity.title}</h1>
                    </IonText>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonText>
                        <p>{"Are yoy sure?"}</p>
                    </IonText>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonButton>Confirm</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton onClick={props.dismissModal}>Cancel</IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    </IonModal>
  )
}
