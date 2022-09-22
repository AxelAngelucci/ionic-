import React, { Fragment, useContext } from "react";
import {IonButtons, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { ActivitiesContext } from "../data/activities-context";
import { ActivityCard } from "../components/UI/ActivityCard/ActivityCard";
import { CompleteModal } from "../components/UI/CompleteModal/CompleteModal";

const AllActivities: React.FC = () => {
    const activitiesContext = useContext(ActivitiesContext);
    return (
            <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>All Activities</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    {
                        activitiesContext.activities.map((a) => {
                            return (
                                <ActivityCard a={a} key={a.id}/>
                            );
                        })
                    }
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}
export default AllActivities;