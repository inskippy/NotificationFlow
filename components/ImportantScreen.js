import React, { useState } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import Notification from './Notification';


export default function ImportantScreen(props) {
   
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Important Notifications!</Text>
        <FlatList data={props.notifs} renderItem={({item}) => 
            <Notification AppName={item.AppName} NotificationText={item.NotificationText} TimeReceived={item.TimeReceived} />
            }/>
      </View>
    );
}