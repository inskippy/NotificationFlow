import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ImportantScreen from './components/ImportantScreen';
import UnimportantScreen from './components/UnimportantScreen';
import SettingsScreen from './components/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Important" component={ImportantScreen} />
        <Tab.Screen name="Unimportant" component={UnimportantScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
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
