import React from 'react';

export default function AppFilter(notification, userAppList) {
    if(userAppList.includes(notification.AppName)) {
        // passed App filter
        return true;
    } else {
        // did not pass App filter, must be unimportant
        return false;
    }
}