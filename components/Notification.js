import React from 'react';
import { Text, View } from 'react-native';

const Notification = (props) => {
    return (
        <View>
            <Text>Name: {props.AppName}</Text>
            <Text>Text: {props.NotificationText}</Text>
            <Text>Time Received: {props.TimeReceived}</Text>
        </View>
    )
}

export default Notification;