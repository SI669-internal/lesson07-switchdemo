import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

/**
 * This file contains 2 versions of the app;
 * SwitchApp demonstrates the basic usage of the Switch Component
 * DarkModeApp demonstrates how to use a switch for changing styles
 * 
 * To change which version of the app runs, change the default export
 */

export class SwitchApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      switchValue: true,
      switchStatus: 'on'
    }
  }

  handleValueChange = (value) => {
    let status = 'off';
    if (value) { status = 'on';}
    this.setState({
      switchValue: value,
      switchStatus: status
    });
  }

  render() {
    return (
      <View style={style.container}>
        <Text>The switch is {this.state.switchStatus}</Text>
        <Switch
          onValueChange={this.handleValueChange}
          value={this.state.switchValue}/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black'
  }
});



export default class DarkModeApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      switchValue: false,
      switchStatus: 'Off',
      style: lightStyle,
    }
  }

  onValueChange = (value) => {
    let status = 'Off';
    let theStyle = lightStyle;
    if (value) { 
      status = 'On';
      theStyle = darkStyle;
    }

    this.setState((prevState) => {return {
      switchValue: value,
      switchStatus: status,
      style: theStyle
    }});
  }

  render() {
    return (
      <View style={this.state.style.container}>
        <Text style={this.state.style.text}>Dark Mode: {this.state.switchStatus}</Text>
        <Switch
          onValueChange={this.onValueChange}
          value={this.state.switchValue}/>
      </View>
    );
  }
}

const lightStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black'
  }
});

const darkStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', 
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
});
