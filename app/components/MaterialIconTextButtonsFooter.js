import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Path } from "react-native-svg";
import { Actions } from 'react-native-router-flux';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const gotoNext5 = () => {
  Actions.next5()
}
const gotoTomorrow=()=>{
  Actions.tomorrow()
}
const gotoHome=()=>{
  Actions.home()
}

function MaterialIconTextButtonsFooter(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.buttonWrapper1} onPress={gotoTomorrow}>
        <MaterialCommunityIconsIcon
          name="timer"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn1Text}>{ "Ngài mai"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper1} onPress={gotoHome}>
        <Icon name="home" style={styles.icon}></Icon>
        <Text style={styles.btn1Text}>{ "Trang chủ"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.activeButtonWrapper} onPress={gotoNext5} >
        <MaterialCommunityIconsIcon
          name="heart"
          style={styles.activeIcon}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.activeContent}>7 ngày tới</Text>
      </TouchableOpacity>

      <Svg viewBox="0 0 0 0" style={styles.path}>
        <Path
          strokeWidth={1}
          fill="rgba(230, 230, 230,1)"
          stroke="rgba(230, 230, 230,1)"
          d="M0.00 0.00 Z"
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    elevation: 2,
    shadowOffset: {
      height: -2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  buttonWrapper1: {
    flex: 1,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 10,
    minWidth: 90,
    maxWidth: 180,
    paddingHorizontal: 12,
    borderTopWidth:1,
    borderRightWidth:1,
    borderColor: "#DCDCDC"
  },
  buttonWrapper2: {
    flex: 1,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 10,
    minWidth: 90,
    maxWidth: 180,
    paddingHorizontal: 12,
    borderTopWidth:1,
    borderRightWidth:1,
    borderColor: "#DCDCDC"
  },
  icon1: {
    backgroundColor: "transparent",
    color: "rgba(11,11,11,1)",
    fontSize: 22,
    opacity: 0.8
  },
  btn1Text: {
    backgroundColor: "transparent",
    color: "rgba(20,19,19,1)",
    paddingTop: 0,
    fontSize: 12,
    fontFamily: "montserrat-regular"
  },
  activeButtonWrapper: {
    flex: 1,
    alignItems: "center",
    paddingTop: 6,
    paddingBottom: 10,
    minWidth: 90,
    maxWidth: 180,
    paddingHorizontal: 12,
    borderTopWidth:1,
    borderColor: "#DCDCDC"
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "rgba(21,21,21,1)",
    fontSize: 22,
    opacity: 0.8
  },
  activeContent: {
    backgroundColor: "transparent",
    color: "rgba(12,11,11,1)",
    paddingTop: 0,
    fontSize: 12,
    fontFamily: "montserrat-regular"
  },
  path: {
    top: 41,
    left: 274,
    width: 0,
    height: 0,
    position: "absolute"
  },
  icon: {
    backgroundColor: "transparent",
    color: "rgba(11,11,11,1)",
    fontSize: 22,
    opacity: 0.8
  }
});

export default MaterialIconTextButtonsFooter;
