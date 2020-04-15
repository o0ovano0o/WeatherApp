import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  StatusBar
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import _ from 'lodash';
import styles from '../assets/style';

const getTime = data => {
  if(data=='now'){
    var date = new Date();
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    return hours + ':' + minutes.substr('-2');
  }
  var date = new Date(data * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  return hours + ':' + minutes.substr('-2');
};
const getbg= data=>{
  if(data=='now'){
    var date = new Date();
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    if(hours>=6&& hours<=15)
      return "require('../assets/images/hot-AM.png')";
    else return "require('../assets/images/hot-AM.png')";
  }
  var date = new Date(data * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  return "require('../assets/images/hot-AM.png')";
};
let time = new Date();
const renderContent = (weatherData) => (
  <View>
     { _.isEmpty(weatherData) ?
          <Text>{'Search for a location'}</Text>
          :
  <View>
  <View style={styles.rect7Stack}>
    <View style={styles.rect7}></View>
    <ImageBackground
      source={{`${getbg('now')}`}
      resizeMode="stretch"
      style={styles.image}
      imageStyle={styles.image_imageStyle}
    >
    </ImageBackground>

    <View style={styles.rect6}>
      <View style={styles.icon9Row}>
        <View style={styles.rect8Column}>
          <View style={styles.rect8}>
            <View style={styles.loremIpsum8Filler}></View>
            <Text style={styles.loremIpsum8}>{`${getTime('now')}`}</Text>
          </View>
        </View>
        <EntypoIcon name="light-up" style={styles.icon9}></EntypoIcon>
        <FontAwesomeIcon name="send-o" style={styles.icon8}></FontAwesomeIcon>
        <IoniconsIcon name="ios-sunny" style={styles.icon5}></IoniconsIcon>

      </View>
      <View style={styles.sunriseRow}>
        <Text style={styles.sunrise}>Sunrise</Text>
        <Text style={styles.wind}>Wind</Text>
        <Text style={styles.sunset}>Sunset</Text>
      </View>

      <View style={styles.loremIpsum7Row}>
        <Text style={styles.loremIpsum7}>{`${getTime(weatherData.sys.sunrise)}`}</Text>
        <Text style={styles.loremIpsum6}>{`${weatherData.wind.speed + ' m/s'}`}</Text>
        <Text style={styles.loremIpsum5}>{`${getTime(weatherData.sys.sunset)}`}</Text>
      </View>
    </View>

    <MaterialIconTextButtonsFooter
      style={styles.materialIconTextButtonsFooter}
    ></MaterialIconTextButtonsFooter>

    <View style={styles.rect2}>
      <EntypoIcon name="adjust" style={styles.icon7}></EntypoIcon>
      <View style={styles.icon6Row}>
        <FeatherIcon name="thermometer" style={styles.icon6}></FeatherIcon>
      </View>
      <Text style={styles.loremIpsum4}>{`${weatherData.main.feels_like}`}</Text>
    </View>

    <FontAwesomeIcon
      name="align-left"
      style={styles.icon}
    ></FontAwesomeIcon>

    <MaterialCommunityIconsIcon
      name="map-marker"
      style={styles.icon2}
    ></MaterialCommunityIconsIcon>

    <View style={styles.rect4}></View>
    <EntypoIcon name="chevron-small-up" style={styles.icon3}></EntypoIcon>
    <EntypoIcon name="triangle-down" style={styles.icon10}></EntypoIcon>
    <EntypoIcon name="triangle-up" style={styles.icon11}></EntypoIcon>
    <EntypoIcon name="cloud" style={styles.icon14}></EntypoIcon>
    <EntypoIcon name="circle" style={styles.icon15}></EntypoIcon>
    <Text style={styles.c17}>C</Text>
    <Text style={styles.currentLocation}>{`${weatherData.name}`}</Text>
    <Text style={styles.today12May19}>Today, 12 May 19</Text>
    <Text style={styles.day13}>MAX</Text>
    <Text style={styles.night}>MIN</Text>
    <Text style={styles.loremIpsum}>{`${weatherData.main.temp}`}</Text>
    <Text style={styles.sunnyWithClouds}>{`${weatherData.weather[0].description}`}</Text>
    <Text style={styles.loremIpsum2}>{`${weatherData.main.temp_max}`}</Text>
    <Text style={styles.loremIpsum3}>{`${weatherData.main.temp_min}`}</Text>
  </View>
  <StatusBar hidden={false}></StatusBar>
  </View>}
  </View>
);
const renderError = errorMessage =>
    (
      <View >
        <Text >{errorMessage}</Text>
      </View>
    );
const CurrentWeather = (props) => {
  const { weatherData, isLoading, errorMessage } = props;
  const stuff = _.isEmpty(errorMessage) ?
  renderContent(weatherData):
  renderError(errorMessage);
  return (
    <View>
      { isLoading ?
        <Text>Loadinggg</Text> :
        stuff}
    </View>
  );
};
export default CurrentWeather;
