import React, { Component, useState } from "react";
import { Text, View, StyleSheet } from 'react-native';
import Checkbox from "./Checkbox";
import { Notification } from './Notification.js';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import { styles } from './styles'

const OPTIONS = ["Gmail", "Slack", "LinkedIn", "Snapchat", "Facebook", "Instagram"];
const now = new Date();
const nextHour = new Date();
//const [value, onChange] = useState([now, nextHour]);
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

export default App;
