import React, { Component } from "react";
import {View } from "react-native";
import * as weatherActions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CurrentWeather from './currentWeather';
import styles from '../assets/style';

export class MainScreen extends Component {
  getLocation(){
    navigator.geolocation.getCurrentPosition( // eslint-disable-line
          (position) => {
              const lat = position.coords.latitude.toString();
              const lon = position.coords.longitude.toString();
              this.props.actions.searchByCoordinates(lat, lon);
          },
          () => {
              const errorMessage = 'Could not fetch weather for your location';
              this.props.actions.setErrorMessage(errorMessage);
          },
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
  }
 async componentDidMount() {
      await this.getLocation();
  }
  render(){
    const { state } = this.props;
    let { weatherData, isLoading,errorMessage} = state;
    return (
    <View style={styles.container}>
          <CurrentWeather
          weatherData={weatherData}
          isLoading={isLoading}
          errorMessage={errorMessage}
          />
    </View>
  );
  }

}

export default connect(state => ({
  state,
}),
dispatch => ({
  actions: bindActionCreators(weatherActions, dispatch),
}),
)(MainScreen);