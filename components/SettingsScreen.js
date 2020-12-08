import React, { Component, useState } from "react";
import { Text, View, StyleSheet } from 'react-native';
import Checkbox from "./Checkbox";
import { Notification } from './Notification.js';
import { styles } from './styles'
import TimeRangeSelect from "react-time-range-select";

const OPTIONS = ["Mail", "Slack", "LinkedIn", "Snapchat", "Facebook", "Instagram"];

export var startDate, startHour, startMin;
export var endDate, endHour, endMin;
export class App extends Component 
{
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    ),

    startTime: "2019-10-05T01:48:00.000Z",
    endTime: "2019-10-05T03:48:00.000Z"

  };

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      },
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    let currentUserAppList = [];
    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        currentUserAppList.push(checkbox);
      });
      this.props.setUserAppList(currentUserAppList);
      alert("Saved: " + currentUserAppList)
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key="{option}"
    />
  );
  
  changeStartTime = value => {
    this.setState({ startTime: value });
    
     startDate = new Date(value);
     startHour = startDate.getHours();
     startMin = startDate.getMinutes();
    console.log("startDate: " + startDate);  
    console.log("startHours " + startHour);  
    console.log("startMins: " + startMin);
  };

  changeEndTime = value => {
    this.setState({ endTime: value });

     endDate = new Date(value);
     endHour = endDate.getHours();
     endMin = endDate.getMinutes();
    console.log("endDate: " + endDate);  
    console.log("endHours " + endHour);  
    console.log("endMins: " + endMin);  

  };

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render()
  {
    return (
      <View style = {styles.container}>
        <Text style={styles.title}>Settings</Text>
        <div className="row mt-5">
  
          <div className="col-sm-12">
  
            <Text style={styles.label}>Time-based Filtering</Text>

            {/* <TimeRangePicker
              onChange={onChange}
            /> */}

            {/* <TimeRange
              use24Hours = {true}
              startMoment='T18:00:00'
	            endMoment='T22:00:00'
            /> */}

            <TimeRangeSelect
              startTime={this.state.startTime}
              endTime={this.state.endTime}
              mode24Hours
              onChangeStart={this.changeStartTime}
              onChangeEnd={this.changeEndTime}
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

// export { startHours };
// export { startMins };
// export { endHours };
// export { endMins };

export default App;
