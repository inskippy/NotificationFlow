import * as React from 'react';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ImportantScreen from './components/ImportantScreen';
import UnimportantScreen from './components/UnimportantScreen';
import SettingsScreen from './components/SettingsScreen';
import SendNotificationScreen from './components/SendNotificationScreen'

const Tab = createBottomTabNavigator();


export default function App() {
  // const [importantNotifs, setImportantNotifs] = useState([]);
  // const [unimportantNotifs, setUnimportantNotifs] = useState([]);

  const [importantNotifs, setImportantNotifs] = useState([{
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
  }]);

  const [unimportantNotifs, setUnimportantNotifs] = useState([{
    id: 0,
    AppName: "Snapchat",
    NotificationText: "Adam Inskip",
    TimeReceived: "12:30pm"
  },
  {
    id: 1,
    AppName: "Facebook",
    NotificationText: "Montel Yu",
    TimeReceived: "12:45pm"
  },
  {
    id: 2,
    AppName: "Instagram",
    NotificationText: "Alejandro Ramirez",
    TimeReceived: "6:20pm"
  }]);

  const notifArrays = {importantNotifs, setImportantNotifs, unimportantNotifs, setUnimportantNotifs};
  

  // const addImportantNotifs = event => {
  //   event.preventDefault();
  //     setImportantNotifs([
  //     ...notifs,
  //     {
  //       id: notifs.length,
  //       AppName: "Snapchat",
  //       NotificationText: "Adam Inskip",
  //       TimeReceived: "11:30am"
  //     }
  //   ])
  // }

  // const addUnimportantNotifs = event => {
  //   event.preventDefault();
  //     setUnimportantNotifs([
  //     ...notifs,
  //     {
  //       id: notifs.length,
  //       AppName: "Snapchat",
  //       NotificationText: "Adam Inskip",
  //       TimeReceived: "11:30am"
  //     }
  //   ])
  // }

  const addNewNotification = (props) => {
    setImportantNotifs([
      ...importantNotifs,
      {
        id: notifs.length,
        AppName: props.AppName,
        NotificationText: props.NotificationText,
        TimeReceived: props.TimeReceived
      }
    ])
  }


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Important" children={()=><ImportantScreen notifs={importantNotifs}/>}/>
        <Tab.Screen name="Unimportant" children={()=><ImportantScreen notifs={unimportantNotifs}/>}/>
        <Tab.Screen name="Settings" children={()=><SettingsScreen/>}/>
        {/* <Tab.Screen name="Send Notifications" children={()=><SendNotificationScreen importantNotifs={importantNotifs} importantNotifs= {importantNotifs} setImportantNotifs={setImportantNotifs} />}/> */}
        <Tab.Screen name="Send Notifications" children={()=><SendNotificationScreen notifArrays={notifArrays} />}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}



// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// import MenuBar from './components/MenuBar.js';
// import { Card } from 'react-native-paper';


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <Text>Hello World! This is a development test!</Text>
//       <StatusBar style="auto" />

//       <NavigationContainer>
//         <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
//           <Tab.Screen name="Home" component={HomeScreen} />
//           <Tab.Screen name="Settings" component={SettingsScreen} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
