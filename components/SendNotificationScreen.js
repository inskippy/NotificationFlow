import React, { useState } from 'react';
import { Button, Text, View, Alert, TextInput } from 'react-native';
import AppFilter from './AppFilter.js'

export default function SendNotificationScreen(props) {
    const [appName, setAppname] = useState("");
    const [notifText, setNotifText] = useState("");
    const [timeRec, setTimeRec] = useState("");
    
    const submit = event => {
        event.preventDefault();
        alert("appName: " + appName + " notifText: " + notifText + " timeRec: " + timeRec)
        // some logic here - apply filters, add to important/unimportant
        // addToImportant();
        AppFilter({
          AppName: appName,
          NotificationText: notifText,
          TimeReceived: timeRec,
        },
        props.notifArrays,
        props.userAppList);
      }

      const addToImportant = () => {
        props.notifArrays.setImportantNotifs([
            ...props.notifArrays.importantNotifs,
            {
              id: props.notifArrays.importantNotifs.length,
              AppName: appName,
              NotificationText: notifText,
              TimeReceived: timeRec
            }
          ])
      }

      const addToUnimportant = () => {
        props.notifArrays.setUnimportantNotifs([
            ...props.notifArrays.unimportantNotifs,
            {
              id: props.notifArrays.unimportantNotifs.length,
              AppName: appName,
              NotificationText: notifText,
              TimeReceived: timeRec
            }
          ])
      }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput placeholder="AppName" onChangeText={appName => setAppname(appName)} />
        <TextInput placeholder="NotificationText" onChangeText={notifText => setNotifText(notifText)} />
        <TextInput placeholder="TimeReceived" onChangeText={timeRec => setTimeRec(timeRec)} />
        <Button title="Send notification" onPress={submit} />
      </View>
    );
}