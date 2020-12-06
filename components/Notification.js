import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    notification: {
      backgroundColor: 'skyblue',
      padding: 20,
      marginVertical: 25,
      marginHorizontal: 50,
      borderRadius: 20,
      width: 500,
      height: 120
    },
    AppName: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    NotificationText: {
        fontSize: 20,
    },
    TimeReceived: {
        fontSize: 15,
        fontStyle: 'italic',
    }
  });

const Notification = (props) => {
    return (
        <View style={styles.notification}>
            <Text style={styles.AppName}>{props.AppName}</Text>
            <Text style={styles.NotificationText}>{props.NotificationText}</Text>
            <Text style={styles.TimeReceived}>{props.TimeReceived}</Text>
        </View>
    )
}

export default Notification;