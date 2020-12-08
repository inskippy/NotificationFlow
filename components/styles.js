import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    title: {
      fontSize: 30,
    },
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
        //marginLeft: 5,
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
      },
      description: {
        fontSize: 16,
        textAlign: 'left',
      } 
  });