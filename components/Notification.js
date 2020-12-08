import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { styles } from './styles'

const Notification = (props) => {
    return (
        <View style={styles.notification}>
            <Text style={styles.AppName}>{props.AppName}</Text>
            <Text style={styles.NotificationText}>{props.NotificationText}</Text>
            <Text style={styles.TimeReceived}>{props.TimeReceivedHr + ":" + props.TimeReceivedMin}</Text>
            {/* <Text style={styles.TimeReceivedMin}>{props.TimeReceivedMin}</Text> */}

        </View>
    )
}

export default Notification;