import React from 'react';
import { isDebug } from './SettingsScreen.js';


export default function TimeFilter(notification, startHour, startMin, endHour, endMin) 
{
    if(isDebug)
    {
        console.log("Start hour: " + startHour + " Start min: " + startMin);
        console.log();
        console.log("End hour: " +  endHour + " End min: " + endMin);
        console.log("If " + notification.TimeReceivedHr + " > " + startHour + " && " + notification.TimeReceivedHr + " < " + endHour);
    }
    
    if(notification.TimeReceivedHr > startHour && notification.TimeReceivedHr < endHour) //hour test
    {
        if(notification.TimeReceivedMin > startMin && notification.TimeReceivedMin < endMin) //min test
        {
            // passed Time filter
            if(isDebug)
            {
                console.log("true");
            }
            return true;
        }
        
    } 
    else 
    {
        // did not pass Time filter, must be unimportant
        if(isDebug)
        {
            console.log("false");
        }
        return false;
    }
}