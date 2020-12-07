import React, { Component } from "react";
import Checkbox from "./Checkbox";
import { Text, View, StyleSheet } from 'react-native';
import { Notification } from './notification.js';
import { DisplayNotification } from './???.js';
import TimeRange from 'react-time-range';
import moment from 'moment';



const OPTIONS = ["Mail", "Slack", "LinkedIn", "Snapchat", "Facebook", "Instagram"];

class App extends Component 
{
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <View style={styles.container}>

        <div className="row mt-5">

          <div className="col-sm-12">

            <Text style={styles.label}>Time-based Filtering</Text>
            
            <TimeRange
            use24Hours={true}
            startMoment={this.state.startTime}
            endMoment={this.state.endTime}
            onChange={this.returnFunction}
            />

            <br /> <br /> <br />


            <Text style={styles.label}>App-based Filtering</Text>
              <form onSubmit={this.handleFormSubmit}>
                {this.createCheckboxes()}
                <div className="form-group mt-2">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>

              </div>
              
            </form>

          </div>

        </div>

      </View>
    );
  }
}

function TimeFilter(Notification)
{
  var time = notification.timeRecieved;
    
  if(!(time > userTimeList.lower && time < userTimeList.upper))
  {
    DisplayNotification(Notification.text); //SendNotificationScreen?
  }
}

function userTimeList()
{
  var start = startMoment;
  var end = endMoment;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
});

export default App;