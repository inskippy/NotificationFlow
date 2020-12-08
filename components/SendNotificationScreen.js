import React, { useState } from 'react';
import { Button, Text, View, Alert, TextInput } from 'react-native';
import AppFilter from './AppFilter.js'
import { styles } from './styles.js';
import TimeFilter from './TimeFilter.js';
import { startHour, startMin, endHour, endMin } from './SettingsScreen.js';

let notificationSet01 = [{
  id: 0,
  AppName: "Mail",
  NotificationText: "CSC211 - Assignment 9 Due Date",
  //TimeReceived: "12:55"
  TimeReceivedHr: 12,
  TimeReceivedMin: 55
},
{
  id: 1,
  AppName: "Slack",
  NotificationText: "Prof Bai posted in CSC 211 #general",
  //TimeReceived: "16:45"
  TimeReceivedHr: 16,
  TimeReceivedMin: 45
},
{
  id: 2,
  AppName: "LinkedIn",
  NotificationText: "New jobs posted in Rochester NY",
  //TimeReceived: "19:57"
  TimeReceivedHr: 19,
  TimeReceivedMin: 57
},
{
  id: 3,
  AppName: "Snapchat",
  NotificationText: "Adam Inskip",
  //TimeReceived: "12:30"
  TimeReceivedHr: 12,
  TimeReceivedMin: 30
},
{
  id: 4,
  AppName: "Facebook",
  NotificationText: "Montel Yu",
  //TimeReceived: "12:45"
  TimeReceivedHr: 12,
  TimeReceivedMin: 45
},
{
  id: 5,
  AppName: "Instagram",
  NotificationText: "Alejandro Ramirez",
  //TimeReceived: "18:20"
  TimeReceivedHr: 18,
  TimeReceivedMin: 20
},
]


export default function SendNotificationScreen(props) {
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
              TimeFilter({
                AppName: appName,
                NotificationText: notifText,
                TimeReceivedHr: timeRecHr,
                TimeReceivedMin: timeRecMin,
                },
                startHour, startMin, endHour, endMin)) {
                // passed filters --> important notification
                notifArrays.setImportantNotifs([
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
          AppName: notif.AppName,
          NotificationText: notif.NotificationText,
          //TimeReceived: notif.TimeReceived,
          TimeReceivedHr: notif.TimeReceivedHr,
          TimeReceivedMin: notif.TimeReceivedMin
        },
        props.userAppList) &&
        TimeFilter({
          AppName: appName,
          NotificationText: notifText,
          //TimeReceived: timeRec,
          TimeReceivedHr: timeRecHr,
          TimeReceivedMin: timeRecMin}, startHour, startMin, endHour, endMin)) {
          // passed filter, add to important
          imp.push({
            id: impID,
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