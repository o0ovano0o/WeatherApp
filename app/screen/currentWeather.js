import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import _ from 'lodash';
import styles from '../assets/style';
import Splash from './Splash';
import AssetExample from "../components/AssetExample";

const getDate= data => {
  if(data=='now'){
    var date = new Date();
    var month = date.getMonth()+1;
    var day =  date.getDate();
    return  day + ' tháng ' + month ;
  }
};
const getTime = data => {
  if(data=='now'){
    var date = new Date();
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    return hours + ':' + minutes.substr('-2');
  }
  if(data=='day'){
    var date = new Date();
    return date.getDate()+' - '+ date.getMonth()+' - '+date.getFullYear();
  }
  var date = new Date(data * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  return hours + ':' + minutes.substr('-2');
};
const getbg = (data) =>{
  let imgbg={
    bgcolor:
          (<ImageBackground
            source={require('../assets/images/hot-AM.png')} resizeMode="stretch" style={styles.image} imageStyle={styles.image_imageStyle}>
          </ImageBackground>),
    rect8cl:(<View style={[ styles.rect8bg1]}></View>),
    rect4cl:(<View style={[styles.rect4, styles.rect4bg1]}></View>),
    rect2cl:(<View style={[styles.rect2bg]}></View>)
  };

    var date = new Date();
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    if (hours>5&&hours<9){
      if(data>20){
          imgbg.bgcolor=(<ImageBackground source={require('../assets/images/nice-AM.png')} resizeMode="stretch" style={styles.image} imageStyle={styles.image_imageStyle}>
          </ImageBackground>);
          imgbg.rect4cl=(<View style={[styles.rect4, styles.rect4bgnice]}></View>);
          imgbg.rect8cl=(<View style={[styles.rect8, styles.rect8bgnice]}></View>);
          imgbg.rect2cl=(<View style={[styles.rect2bg,styles.rect2bgnice]}></View>);
        }
        else{
          imgbg.bgcolor=(<ImageBackground source={require('../assets/images/sad-AM.png')} resizeMode="stretch" style={styles.image} imageStyle={styles.image_imageStyle}>
          </ImageBackground>);
          imgbg.rect4cl=(<View style={[styles.rect4, styles.rect4bgsad_AM]}></View>);
          imgbg.rect8cl=(<View style={[styles.rect8, styles.rect8bgsad_AM]}></View>);
          imgbg.rect2cl=(<View style={[styles.rect2bg,styles.rect2bgsad_AM]}></View>);
        }
    }
    else if(hours>=22 || hours<3){
      if(data<5){
          imgbg.bgcolor=(<ImageBackground source={require('../assets/images/sad-ice.png')} resizeMode="stretch" style={styles.image} imageStyle={styles.image_imageStyle}>
          </ImageBackground>);
          imgbg.rect4cl=(<View style={[styles.rect4, styles.rect4bgsad_AM]}></View>);
          imgbg.rect8cl=(<View style={[styles.rect8, styles.rect8bgsad_AM]}></View>);
          imgbg.rect2cl=(<View style={[styles.rect2bg,styles.rect2bgsad_AM]}></View>);
      }
      else{
          imgbg.bgcolor=(<ImageBackground source={require('../assets/images/night-tim-PM.png')} resizeMode="stretch" style={styles.image} imageStyle={styles.image_imageStyle}>
          </ImageBackground>);
          imgbg.rect4cl=(<View style={[styles.rect4, styles.rect4bgnight_tim_PM]}></View>);
          imgbg.rect8cl=(<View style={[styles.rect8, styles.rect8bgnight_tim_PM]}></View>);
          imgbg.rect2cl=(<View style={[styles.rect2bg,styles.rect2bgnight_tim_PM]}></View>);
      }
    }
    else if(hours>=9&&hours<17){
      if(data>=20&&data<30){
          imgbg.bgcolor=(<ImageBackground source={require('../assets/images/nice-AM.png')} resizeMode="stretch" style={styles.image} imageStyle={styles.image_imageStyle}>
          </ImageBackground>);
          imgbg.rect4cl=(<View style={[styles.rect4, styles.rect4bgnice]}></View>);
          imgbg.rect8cl=(<View style={[styles.rect8, styles.rect8bgnice]}></View>);
          imgbg.rect2cl=(<View style={[styles.rect2bg,styles.rect2bgnice]}></View>);
      }
      else if(data<20){
          imgbg.bgcolor=(<ImageBackground source={require('../assets/images/sad-AM.png')} resizeMode="stretch" style={styles.image} imageStyle={styles.image_imageStyle}>
          </ImageBackground>);
          imgbg.rect4cl=(<View style={[styles.rect4, styles.rect4bgsad_AM]}></View>);
          imgbg.rect8cl=(<View style={[styles.rect8, styles.rect8bgsad_AM]}></View>);
          imgbg.rect2cl=(<View style={[styles.rect2bg,styles.rect2bgsad_AM]}></View>);
      }
      else{
          imgbg.bgcolor=(<ImageBackground source={require('../assets/images/hot-AM.png')} resizeMode="stretch" style={styles.image} imageStyle={styles.image_imageStyle}>
          </ImageBackground>);
          imgbg.rect4cl=(<View style={[styles.rect4, styles.rect4bghot_AM]}></View>);
          imgbg.rect8cl=(<View style={[styles.rect8, styles.rect8bghot_AM]}></View>);
          imgbg.rect2cl=(<View style={[styles.rect2bg,styles.rect2bghot_AM]}></View>);
      }
    }
    else{
          imgbg.bgcolor=(<ImageBackground
            source={require('../assets/images/Night-PM.png')}resizeMode="stretch"style={styles.image}imageStyle={styles.image_imageStyle}>
          </ImageBackground>);
          imgbg.rect4cl=(<View style={[styles.rect4, styles.rect4bgNight_PM]}></View>);
          imgbg.rect8cl=(<View style={[styles.rect8, styles.rect8bgNight_PM]}></View>);
          imgbg.rect2cl=(<View style={[styles.rect2bg,styles.rect2bgNight_PM]}></View>);
    }

  return imgbg;
};
let time = new Date();
const renderContent = (weatherData,weatherDatas) => (
  <View style={styles.container}>

     { (_.isEmpty(weatherData)||_.isEmpty(weatherDatas)) ?
         <View style={{backgroundColor: '#385999',flex:1}}></View>
          :
      <View>
          <View style={styles.rect7Stack}>
                <View style={styles.rect7}></View>

                {getbg(weatherData.main.temp).bgcolor}
                <View style={styles.rect6}>
                      <View style={styles.icon9Row}>
                            <View style={styles.rect8Column}>
                                <View styles={styles.rect8}>
                                    {getbg(weatherData.main.temp).rect8cl}
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
                    {getbg(weatherData.main.temp).rect2cl}
                    <EntypoIcon name="adjust" style={styles.icon7}></EntypoIcon>
                    <View style={styles.icon6Row}>
                        <FeatherIcon name="thermometer" style={styles.icon6}></FeatherIcon>
                    </View>
                    <Text style={styles.loremIpsum4}>{`${weatherDatas.daily[0].feels_like.day}`}</Text>
                </View>
                <FontAwesomeIcon
                      name="align-left"
                      style={styles.icon}
                ></FontAwesomeIcon>
                <MaterialCommunityIconsIcon
                  name="map-marker"
                  style={styles.icon2}
                ></MaterialCommunityIconsIcon>

                {getbg(weatherData.main.temp).rect4cl}
                <AssetExample></AssetExample>
                <EntypoIcon name="triangle-down" style={styles.icon10}></EntypoIcon>
                <EntypoIcon name="triangle-up" style={styles.icon11}></EntypoIcon>
                <EntypoIcon name="cloud" style={styles.icon14}></EntypoIcon>
                <EntypoIcon name="circle" style={styles.icon15}></EntypoIcon>
                <Text style={styles.c17}>C</Text>
                <Text style={styles.currentLocation}>{`${weatherData.name}`}</Text>
                <Text style={styles.today12May19}>Hôm nay, {`${getDate('now')}`}</Text>
                <Text style={styles.day13}>MAX</Text>
                <Text style={styles.night}>MIN</Text>
                <Text style={styles.loremIpsum}>{`${weatherData.main.temp}`}</Text>
                <Text style={styles.sunnyWithClouds}>{`${weatherData.weather[0].description}`}</Text>
                <Text style={styles.loremIpsum2}>{`${weatherDatas.daily[0].temp.max}`}</Text>
                <Text style={styles.loremIpsum3}>{`${weatherDatas.daily[0].temp.min}`}</Text>
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
  const { weatherData, isLoading, errorMessage,weatherDatas } = props;
  const stuff = _.isEmpty(errorMessage) ?
  renderContent(weatherData,weatherDatas):
  renderError(errorMessage);
  return (
    <View style={styles.container}>
      { isLoading ?
      <Splash></Splash>:
        stuff}
    </View>
  );
};
export default CurrentWeather;
