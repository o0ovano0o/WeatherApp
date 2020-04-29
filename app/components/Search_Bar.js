import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Path } from "react-native-svg";
import { Actions } from 'react-native-router-flux';
import EntypoIcon from "react-native-vector-icons/Entypo";
import Icon from 'react-native-vector-icons/Ionicons'
const gotoDia = () => {
  Actions.Sidebar()
}

function AssetExample(props) {
  return (

    <TouchableOpacity style={styles.container} onPress={gotoDia} >
      <Icon name="ios-search" style={styles.icon3}/>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  container: {
    height:40,
    width:40,
    top:-30,
    left:290,
    borderRadius: 40,
  },
  icon3: {
    color: "white",
    fontSize: 25,
    position: "absolute",
    top: -1,
    left: 0
  },
});

export default AssetExample;
