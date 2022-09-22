import React, {PropsWithChildren, useState} from 'react'
import { ActivitiesContext, Activity, ActivityContextModel, ActivityType } from './activities-context';

export const ActivitiesContextProvider: React.FC<PropsWithChildren> = (props) => {
    const [activities, setActivities] = useState<Activity[]>(
        [
            {
                id: Math.random().toString(),
                title: 'My daily sleep',
                description: 'Sleep through the night after a day of quarantine',
                hour: '23:00',
                activityType: 'rest',
                image: '/assets/img/rest.webp',
                isCompleted: false
            },
            {
                id: Math.random().toString(),
                title: 'Hard work',
                description: 'Work in the projects I have at Tribalyte',
                hour: '9:00',
                activityType: 'work',
                image: '/assets/img/work.webp',
                isCompleted: false
            },
            {
                id: Math.random().toString(),
                title: 'Play ping pong',
                description: 'Play a ping pong match on the hall table!',
                hour: '19:00',
                activityType: 'sleep',
                image: '/assets/img/sleep.jpg',
                isCompleted: false
            }
        ]
    )
    const addActivity = (title: string, description: string, hour: string, activityType: ActivityType) => {
        let image = '';
        switch(activityType){
            case 'rest':
                image = 'assets/img/rest.webp';
                break;
            case 'sleep':
                image = 'assets/img/sleep.jpg';
                break;
            case 'work':
                image = 'assets/img/work.webp';
                break;
        }
        const activity: Activity = {
            id: Math.random().toString(),
            title: title,
            description: description,
            hour: hour,
            image: image,
            activityType: activityType,
            isCompleted: false
        }
        setActivities((activities)=>{
            return [...activities, activity];
        });
    }

    const completeActivity = (activityId: string) => {
        setActivities((activities) => {
            const updatedActivities = [...activities];
            const selectedActivityIndex = activities.findIndex((act) => act.id === activityId);
            const updateActivity = {...updatedActivities[selectedActivityIndex], isCompleted: true};
            updatedActivities[selectedActivityIndex] = updateActivity;
            return updatedActivities;
        });
    }
    
    const activitiesContext: ActivityContextModel = {
        activities,
        addActivity,
        completeActivity
    }

    return (
        <ActivitiesContext.Provider value={activitiesContext}>
            {props.children}
        </ActivitiesContext.Provider>
    );
}