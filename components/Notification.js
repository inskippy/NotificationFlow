import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { images } from '../Assets/imageImport';
import { styles } from './styles'


const Notification = (props) => {
    console.log(images.gmail);
    console.log(props.AppImage);
    return (
        <View style={styles.notification}>
            <Image style={styles.AppImage} source={props.AppImage} />
            <View style={styles.notifContent}>
                <View style={styles.notifTopBar}>
                    <Text style={styles.AppName}>{props.AppName}  </Text>
                    <Text style={styles.TimeReceived}>{props.TimeReceived}</Text>
                </View>
                <Text style={styles.NotificationText}>{props.NotificationText}</Text>
            </View>
        </View>
    )
}

export default Notification;