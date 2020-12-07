import React, { useState } from 'react';
import { Button, Text, View, Alert, TextInput } from 'react-native';
import AppFilter from './AppFilter.js'
import { styles } from './styles.js';




let notificationSet01 = [{
  id: 0,
  AppName: "Mail",
  NotificationText: "CSC211 - Assignment 9 Due Date",
  TimeReceived: "12:00pm"
},
{
  id: 1,
  AppName: "Slack",
  NotificationText: "Prof Bai posted in CSC 211 #general",
  TimeReceived: "4:45pm"
},
{
  id: 2,
  AppName: "LinkedIn",
  NotificationText: "New jobs posted in Rochester NY",
  TimeReceived: "7:57pm"
},
{
  id: 3,
  AppName: "Snapchat",
  NotificationText: "Adam Inskip",
  TimeReceived: "12:30pm"
},
{
  id: 4,
  AppName: "Facebook",
  NotificationText: "Montel Yu",
  TimeReceived: "12:45pm"
},
{
  id: 5,
  AppName: "Instagram",
  NotificationText: "Alejandro Ramirez",
  TimeReceived: "6:20pm"
},
]


export default function SendNotificationScreen(props) {
    const [appName, setAppname] = useState("");
    const [notifText, setNotifText] = useState("");
    const [timeRec, setTimeRec] = useState("");
    
    const submit = event => {
        event.preventDefault();
        alert("appName: " + appName + " notifText: " + notifText + " timeRec: " + timeRec)
        // some logic here - apply filters, add to important/unimportant
        // addToImportant();
        if( AppFilter({
            AppName: appName,
            NotificationText: notifText,
            TimeReceived: timeRec,
            },
            props.userAppList)) {
              // passed filters --> important notification
              notifArrays.setImportantNotifs([
                ...props.notifArrays.importantNotifs,
                {
                    id: props.notifArrays.importantNotifs.length,
                    AppName: appName,
                    NotificationText: notifText,
                    TimeReceived: timeRec,
                }
            ]);
            } else {
              // unimportant notification
              props.notifArrays.setUnimportantNotifs([
                ...props.notifArrays.unimportantNotifs,
                {
                    id: props.notifArrays.unimportantNotifs.length,
                    AppName: appName,
                    NotificationText: notifText,
                    TimeReceived: timeRec,
                }
            ]);
            }
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

    const sendNotificationSet = () => {
      let imp = props.notifArrays.importantNotifs;
      let impID = props.notifArrays.importantNotifs.length;
      let unimp = props.notifArrays.unimportantNotifs;
      let unimpID = props.notifArrays.unimportantNotifs.length;
      
      for (const notif of notificationSet01) {
        if(AppFilter({
          AppName: notif.AppName,
          NotificationText: notif.NotificationText,
          TimeReceived: notif.TimeReceived,
        },
        props.userAppList)) {
          // passed filter, add to important
          imp.push({
            id: impID,
            AppName: notif.AppName,
            NotificationText: notif.NotificationText,
            TimeReceived: notif.TimeReceived,
          });
          impID = impID + 1;
        } else {
          // failed filter, add to unimportant
          unimp.push({
            id: unimpID,
            AppName: notif.AppName,
            NotificationText: notif.NotificationText,
            TimeReceived: notif.TimeReceived,
          });
          unimpID = unimpID + 1;
        }
      }
      // add filtered notifications to master lists
      props.notifArrays.setImportantNotifs(imp);
      props.notifArrays.setUnimportantNotifs(unimp);
    }

    return (
      <View style={styles.container}>
        <TextInput placeholder="AppName" onChangeText={appName => setAppname(appName)} />
        <TextInput placeholder="NotificationText" onChangeText={notifText => setNotifText(notifText)} />
        <TextInput placeholder="TimeReceived" onChangeText={timeRec => setTimeRec(timeRec)} />
        <Button title="Send notification" onPress={submit} />
        <Button title="Notification Set 01" onPress={sendNotificationSet} />
      </View>
    );
}