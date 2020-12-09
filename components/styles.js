import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    title: {
      fontSize: 30,
    },
    AppName: {
        fontSize: 12,
        textAlignVertical: 'center',
    },
    NotificationText: {
        fontSize: 18,
    },
    TimeReceived: {
        fontSize: 12,
        // fontStyle: 'italic',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    label: {
      //margin: 24,
      marginLeft: 5,
      marginBottom: 10,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'left',
    },
    notification: {
      backgroundColor: '#ffffff',
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 25,
      marginVertical: 10,
      width: 400,
      height: 120,
      flex: 1,
      flexDirection: 'row',
    },
    AppImage: {
      width: 40,
      height: 40,
      marginRight: 20,
    },
    notifContent: {
      flexDirection: 'column',
    },
    notifTopBar: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    description: {
      fontSize: 16,
      textAlign: 'left',
    }
  });