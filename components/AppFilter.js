import React from 'react';

export default function AppFilter(notification, notifArrays, userAppList) {
    if(userAppList.includes(notification.AppName)) {
        // passes filter, run the notification through the Time Filter
        // TimeFilter(props.notification)

        // OR FOR TESTING
        notifArrays.setImportantNotifs([
            ...notifArrays.importantNotifs,
            {
                id: notifArrays.importantNotifs.length,
                AppName: notification.AppName,
                NotificationText: notification.NotificationText,
                TimeReceived: notification.TimeReceived,
            }
        ]);
    } else {
        // did not pass App filter, must be unimportant
        notifArrays.setUnimportantNotifs([
            ...notifArrays.unimportantNotifs,
            {
                id: notifArrays.unimportantNotifs.length,
                AppName: notification.AppName,
                NotificationText: notification.NotificationText,
                TimeReceived: notification.TimeReceived,
            }
        ]);
        
    }
}
