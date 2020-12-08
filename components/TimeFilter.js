import React from 'react';

export default function TimeFilter(notification, startHour, startMin, endHour, endMin) 
{
    console.log("Start hour: " + startHour + " Start min: " + startMin);
    console.log();
    console.log("End hour: " +  endHour + " End min: " + endMin);

    console.log("If " + notification.TimeReceivedHr + " > " + startHour + " && " + notification.TimeReceivedHr + " < " + endHour);

    if(notification.TimeReceivedHr > startHour && notification.TimeReceivedHr < endHour)
    {
        //if(startMin > notification.TimeReceivedMin && endMin < notification.TimeReceivedMin)
        //{
            // passed Time filter
            console.log("true");
            return true;
        //}
        
    } 
    else 
    {
        // did not pass Time filter, must be unimportant
        console.log("false");
        return false;
    }
}