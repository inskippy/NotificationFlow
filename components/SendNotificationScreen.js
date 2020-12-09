import React, { useState } from 'react';
import { Button, Text, View, Alert, TextInput } from 'react-native';
import { images } from '../Assets/imageImport.js';
import AppFilter from './AppFilter.js'
import { styles } from './styles.js';

import TimeFilter from './TimeFilter.js';
import { startHour, startMin, endHour, endMin } from './SettingsScreen.js';

export default function SendNotificationScreen(props) {
  let notificationSet01 = [{
    id: 0,
    AppImage: images.gmail,
    AppName: "Gmail",
    NotificationText: "CSC211 - Assignment 9 Due Date",
//     TimeReceived: "12:00pm"
    TimeReceivedHr: 12,
    TimeReceivedMin: 10,
  },
  {
    id: 1,
    AppImage: images.slack,
    AppName: "Slack",
    NotificationText: "Prof Bai posted in CSC 211 #general",
//     TimeReceived: "4:45pm"
    TimeReceivedHr: 16,
    TimeReceivedMin: 45,
  },
  {
    id: 2,
    AppImage: images.linkedin,
    AppName: "LinkedIn",
    NotificationText: "New jobs posted in Rochester NY",
//     TimeReceived: "7:57pm"
    TimeReceivedHr: 19,
    TimeReceivedMin: 57,
  },
  {
    id: 3,
    AppImage: images.snapchat,
    AppName: "Snapchat",
    NotificationText: "Adam Inskip",
//     TimeReceived: "12:30pm"
    TimeReceivedHr: 12,
    TimeReceivedMin: 30,
  },
  {
    id: 4,
    AppImage: images.facebook,
    AppName: "Facebook",
    NotificationText: "Montel Yu",
//     TimeReceived: "12:45pm"
    TimeReceivedHr: 12,
    TimeReceivedMin: 45,
  },
  {
    id: 5,
    AppImage: images.instagram,
    AppName: "Instagram",
    NotificationText: "Alejandro Ramirez",
//     TimeReceived: "6:20pm"
    TimeReceivedHr: 18,
    TimeReceivedMin: 20,
  },
  {
    id: 6,
    AppImage: images.messenger,
    AppName: "Messenger",
    NotificationText: "John Doe",
//     TimeReceived: "1:20am"
    TimeReceivedHr: 1,
    TimeReceivedMin: 20,
  },
  {
    id: 7,
    AppImage: images.teams,
    AppName: "Teams",
    NotificationText: "New post in ME 204 in #general",
//     TimeReceived: "12:30pm"
    TimeReceivedHr: 12,
    TimeReceivedMin: 30,
  },
  {
    id: 8,
    AppImage: images.twitter,
    AppName: "Twitter",
    NotificationText: "@Google liked your tweet",
//     TimeReceived: "9:43pm"
    TimeReceivedHr: 21,
    TimeReceivedMin: 43,
  },
  ]

    const [appName, setAppname] = useState("");
    const [notifText, setNotifText] = useState("");

    //const [timeRec, setTimeRec] = useState("");
    const [timeRecHr, setTimeRecHr] = useState(0);
    const [timeRecMin, setTimeRecMin] = useState(0);
    
    console.log("SendNotifStartHr: " + startHour);

    const submit = event => {
        event.preventDefault();
        alert("appName: " + appName + " notifText: " + notifText + " timeRec: " + timeRecHr + ":" + timeRecMin)
        // some logic here - apply filters, add to important/unimportant
        // addToImportant();
        if( AppFilter({
              AppName: appName,
              NotificationText: notifText,
              TimeReceivedHr: timeRecHr,
              TimeReceivedMin: timeRecMin,
              },
              props.userAppList) &&
              !TimeFilter({
                AppName: appName,
                NotificationText: notifText,
                TimeReceivedHr: timeRecHr,
                TimeReceivedMin: timeRecMin,
                },
                startHour, startMin, endHour, endMin)) {
                // passed filters --> important notification
                props.notifArrays.setImportantNotifs([
                  ...props.notifArrays.importantNotifs,
                  {
                      id: props.notifArrays.importantNotifs.length,
                      AppName: appName,
                      NotificationText: notifText,
                      TimeReceivedHr: timeRecHr,
                      TimeReceivedMin: timeRecMin,
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
                    //TimeReceived: timeRec,
                    TimeReceivedHr: timeRecHr,
                    TimeReceivedMin: timeRecMin
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
            //TimeReceived: timeRec
            TimeReceivedHr: timeRecHr,
            TimeReceivedMin: timeRecMin
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
            //TimeReceived: timeRec
            TimeReceivedHr: timeRecHr,
            TimeReceivedMin: timeRecMin
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
          AppImage: notif.AppImage,
          AppName: notif.AppName,
          NotificationText: notif.NotificationText,
          //TimeReceived: notif.TimeReceived,
          TimeReceivedHr: notif.TimeReceivedHr,
          TimeReceivedMin: notif.TimeReceivedMin
        },
        props.userAppList) &&
        !TimeFilter({
          AppName: appName,
          NotificationText: notifText,
          //TimeReceived: timeRec,
          TimeReceivedHr: timeRecHr,
          TimeReceivedMin: timeRecMin}, startHour, startMin, endHour, endMin)) {
          // passed filter, add to important
          imp.push({
            id: impID,
            AppImage: notif.AppImage,
            AppName: notif.AppName,
            NotificationText: notif.NotificationText,
            //TimeReceived: notif.TimeReceived,
            TimeReceivedHr: notif.TimeReceivedHr,
            TimeReceivedMin: notif.TimeReceivedMin,
          });
          impID = impID + 1;
        } else {
          // failed filter, add to unimportant
          unimp.push({
            id: unimpID,
            AppImage: notif.AppImage,
            AppName: notif.AppName,
            NotificationText: notif.NotificationText,
            //TimeReceived: notif.TimeReceived,
            TimeReceivedHr: notif.TimeReceivedHr,
            TimeReceivedMin: notif.TimeReceivedMin,
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
        {/* <TextInput placeholder="TimeReceived" onChangeText={timeRec => setTimeRec(timeRec)} /> */}
        <TextInput placeholder="TimeReceivedHr" onChangeText={timeRecHr => setTimeRecHr(timeRecHr)} />
        <TextInput placeholder="TimeReceivedMin" onChangeText={timeRecMin => setTimeRecMin(timeRecMin)} />
        <Button title="Send notification" onPress={submit} />
        <Button title="Notification Set 01" onPress={sendNotificationSet} />
      </View>
    );
}