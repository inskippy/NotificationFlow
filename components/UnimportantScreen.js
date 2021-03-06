import React, { useState } from 'react';
import { Text, View, FlatList, StyleSheet, Button } from 'react-native';
import Notification from './Notification';
import { styles } from './styles'


export default function ImportantScreen(props) {
   
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Unimportant Notifications</Text>
        <FlatList data={props.notifs} renderItem={({item}) => 
            <Notification AppName={item.AppName} NotificationText={item.NotificationText} TimeReceivedHr={item.TimeReceivedHr} TimeReceivedMin={item.TimeReceivedMin} AppImage={item.AppImage}/>
            }/>
      </View>
    );
}