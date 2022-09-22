import React from "react";

export type ActivityType = "rest" | "work" | "sleep";

export interface Activity {
    id: string;
    title: string;
    description: string;
    activityType: ActivityType;
    image: string;
    hour: string;
    isCompleted: boolean;
}

export interface ActivityContextModel {
    activities: Activity[];
    addActivity: (title: string, description: string, hour: string, activityType: ActivityType) => void;
    completeActivity: (id: string) => void; 
}

export const ActivitiesContext = React.createContext<ActivityContextModel>({
    activities: [],
    addActivity: () => {},
    completeActivity: ()=>{},
});