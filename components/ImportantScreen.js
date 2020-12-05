import React, { useState } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import Notification from './Notification';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 25,
    marginHorizontal: 50,
  },
  title: {
    fontSize: 32,
  },
});

export default function ImportantScreen(props) {
   
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Important Notifications!</Text>
        <FlatList data={props.notifs} renderItem={({item}) => 
            <View style={styles.item}>
              <Text>{item.AppName}</Text>
              <Text>{item.NotificationText}</Text>
              <Text>{item.TimeReceived}</Text>
            </View>
            }/>
        {/* <Notification AppName="Snapchat" NotificationText="Adam Inskip" TimeReceived="12:30pm" /> */}
      </View>
    );
}