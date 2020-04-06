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

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect7Stack}>
        <View style={styles.rect7}></View>
        <ImageBackground
          source={require("../assets/images/Night-PM.png")}
          resizeMode="stretch"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <Text style={styles.loremIpsum3}>30</Text>
        </ImageBackground>
        <View style={styles.rect6}>
          <View style={styles.icon9Row}>
            <EntypoIcon name="light-up" style={styles.icon9}></EntypoIcon>
            <View style={styles.rect8Column}>
              <View style={styles.rect8}>
                <View style={styles.loremIpsum8Filler}></View>
                <Text style={styles.loremIpsum8}>12:30</Text>
              </View>
              <FontAwesomeIcon
                name="send-o"
                style={styles.icon8}
              ></FontAwesomeIcon>
            </View>
            <IoniconsIcon name="ios-sunny" style={styles.icon5}></IoniconsIcon>
          </View>
          <View style={styles.sunriseRow}>
            <Text style={styles.sunrise}>Sunrise</Text>
            <Text style={styles.wind}>Wind</Text>
            <Text style={styles.sunset}>Sunset</Text>
          </View>
          <View style={styles.loremIpsum7Row}>
            <Text style={styles.loremIpsum7}>06:05</Text>
            <Text style={styles.loremIpsum6}>705</Text>
            <View style={styles.group4}>
              <Text style={styles.loremIpsum5}>05:04</Text>
            </View>
          </View>
          <View style={styles.group2}></View>
        </View>
        <MaterialIconTextButtonsFooter
          style={styles.materialIconTextButtonsFooter}
        ></MaterialIconTextButtonsFooter>
        <View style={styles.rect2}>
          <EntypoIcon name="adjust" style={styles.icon7}></EntypoIcon>
          <View style={styles.icon6Row}>
            <FeatherIcon name="thermometer" style={styles.icon6}></FeatherIcon>
            <Text style={styles.loremIpsum4}>37</Text>
          </View>
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
        <EntypoIcon name="triangle-down" style={styles.icon10}></EntypoIcon>
        <EntypoIcon name="triangle-up" style={styles.icon11}></EntypoIcon>
        <EntypoIcon name="cloud" style={styles.icon14}></EntypoIcon>
        <EntypoIcon name="circle" style={styles.icon15}></EntypoIcon>
        <Text style={styles.c17}>C</Text>
        <Text style={styles.currentLocation}>Current location</Text>
        <EntypoIcon name="chevron-small-up" style={styles.icon3}></EntypoIcon>
        <Text style={styles.today12May19}>Today, 12 May 19</Text>
        <Text style={styles.day13}>DAY</Text>
        <Text style={styles.night}>NIGHT</Text>
        <Text style={styles.loremIpsum}>40</Text>
        <Text style={styles.sunnyWithClouds}>Sunny with clouds</Text>
        <Text style={styles.loremIpsum2}>32</Text>
      </View>
      <StatusBar hidden={false}></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect7: {
    top: 391,
    left: 119,
    width: 56,
    height: 56,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute"
  },
  image: {
    top: 0,
    left: 0,
    width: 360,
    height: 570,
    position: "absolute"
  },
  image_imageStyle: {
    opacity: 0.94
  },
  loremIpsum3: {
    color: "rgba(241,233,233,1)",
    fontSize: 15,
    fontFamily: "montserrat-regular",
    marginTop: 228,
    marginLeft: 106
  },
  rect6: {
    top: 409,
    left: 0,
    width: 360,
    height: 161,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderTopLeftRadius: 54,
    borderTopRightRadius: 54
  },
  icon9: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    width: 30,
    height: 30,
    marginTop: 35
  },
  rect8: {
    width: 69,
    height: 28,
    backgroundColor: "rgba(43,87,140,1)",
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12
  },
  loremIpsum8Filler: {
    flex: 1,
  },
  loremIpsum8: {
    color: "black",
    fontSize: 15,
    fontFamily: "montserrat-regular",
    lineHeight: 20,
    marginBottom: 3,
    marginLeft: 17,
    zIndex:-1,
  },
  icon8: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    width: 30,
    height: 30,
    marginTop: 7,
    marginLeft: 11
  },
  rect8Column: {
    width: 69,
    marginLeft: 84
  },
  icon5: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    width: 33,
    height: 40,
    marginLeft: 58,
    marginTop: 25
  },
  icon9Row: {
    height: 65,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 36,
    marginRight: 50
  },
  sunrise: {
    width: 56,
    height: 16,
    color: "rgba(11,10,10,1)",
    fontSize: 15,
    fontFamily: "montserrat-regular"
  },
  wind: {
    width: 41,
    height: 16,
    color: "rgba(11,10,10,1)",
    fontSize: 15,
    fontFamily: "montserrat-regular",
    marginLeft: 80
  },
  sunset: {
    width: 52,
    height: 16,
    color: "rgba(11,10,10,1)",
    fontSize: 15,
    fontFamily: "montserrat-regular",
    marginLeft: 74
  },
  sunriseRow: {
    height: 14,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 37
  },
  loremIpsum7: {
    color: "rgba(11,10,10,1)",
    fontSize: 15,
    fontFamily: "montserrat-regular",
    marginTop: 1
  },
  loremIpsum6: {
    color: "rgba(11,10,10,1)",
    fontSize: 15,
    fontFamily: "montserrat-regular",
    marginLeft: 88,
    marginTop: 1
  },
  group4: {
    width: 48,
    height: 17,
    marginLeft: 85
  },
  loremIpsum5: {
    color: "rgba(11,10,10,1)",
    fontSize: 15,
    fontFamily: "montserrat-regular",
    marginTop: 1,
    marginLeft: 6
  },
  loremIpsum7Row: {
    height: 18,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 32,
    marginRight: 39
  },
  group2: {
    width: 54,
    height: 20,
    marginTop: 7,
    marginLeft: 32
  },
  materialIconTextButtonsFooter: {
    top: 560,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  rect2: {
    top: 365,
    left: 150,
    width: 69,
    height: 65,
    backgroundColor: "rgba(74,144,226,1)",
    position: "absolute",
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    borderColor: "rgba(74,144,226,1)",
    borderWidth: 0,
    borderBottomWidth: 0
  },
  icon7: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    width: 35,
    height: 34,
    marginTop: 3,
    marginLeft: 20
  },
  icon6: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    width: 20,
    height: 24
  },
  loremIpsum4: {
    color: "black",
    fontSize: 15,
    fontFamily: "montserrat-700",
    marginLeft: 5,
    marginTop: 4,

  },
  icon6Row: {
    height: 24,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 4,
    marginRight: 23
  },
  icon: {
    color: "rgba(248,242,242,1)",
    fontSize: 30,
    width: 31,
    height: 30,
    position: "absolute",
    top: 10,
    left: 12
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    width: 26,
    height: 30,
    position: "absolute",
    top: 10,
    left: 315
  },
  rect4: {
    top: 402,
    left: 285,
    width: 40,
    height: 38,
    backgroundColor: "rgba(74,144,226,1)",
    position: "absolute",
    borderRadius: 100
  },
  icon10: {
    color: "rgba(252,249,249,1)",
    fontSize: 22,
    width: 25,
    height: 19,
    position: "absolute",
    top: 224,
    left: 74
  },
  icon11: {
    color: "rgba(252,244,244,1)",
    fontSize: 22,
    width: 22,
    height: 22,
    position: "absolute",
    top: 192,
    left: 73
  },
  icon14: {
    color: "rgba(240,235,235,1)",
    fontSize: 44,
    position: "absolute",
    top: 143,
    left: 167
  },
  icon15: {
    color: "rgba(240,235,235,1)",
    fontSize: 12,
    position: "absolute",
    bottom: 471,
    left: 287
  },
  c17: {
    top: 150,
    left: 294,
    color: "rgba(241,233,233,1)",
    position: "absolute",
    fontSize: 30,
    fontFamily: "montserrat-700"
  },
  currentLocation: {
    top: 110,
    left: 14,
    width: 166,
    height: 30,
    color: "rgba(243,235,235,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "montserrat-regular"
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    position: "absolute",
    top: 402,
    left: 285
  },
  today12May19: {
    top: 70,
    left: 11,
    width: 209,
    height: 30,
    color: "rgba(243,241,241,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "montserrat-700"
  },
  day13: {
    top: 195,
    left: 23,
    width: 35,
    height: 17,
    color: "rgba(245,239,239,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "montserrat-regular"
  },
  night: {
    top: 228,
    left: 20,
    width: 54,
    height: 15,
    color: "rgba(245,240,240,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "montserrat-regular"
  },
  loremIpsum: {
    top: 130,
    left: 219,
    color: "rgba(241,233,233,1)",
    position: "absolute",
    fontSize: 50,
    fontFamily: "montserrat-700"
  },
  sunnyWithClouds: {
    top: 194,
    left: 164,
    color: "rgba(241,233,233,1)",
    position: "absolute",
    fontSize: 19,
    fontFamily: "montserrat-regular"
  },
  loremIpsum2: {
    top: 198,
    left: 107,
    color: "rgba(241,233,233,1)",
    position: "absolute",
    fontSize: 15,
    fontFamily: "montserrat-regular"
  },
  rect7Stack: {
    width: 360,
    height: 620
  }
});

export default Untitled1;
