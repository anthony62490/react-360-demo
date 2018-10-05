import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import axios from 'axios';

class InfoBox extends Component {
  state = {
    data: []
  };

  // componentDidMount()
  // {
  //   axios
  //     .get('http://swapi.co/api/people')
  //     .then(response => this.setState({data: response.data}))
  //     .catch(err => console.log(`Error in InfoBox: "${err}"`));
  // }

  render()
  {
    return (
      <View>
        <Text>Test</Text>
      </View>
    );
  }
};

export default InfoBox;