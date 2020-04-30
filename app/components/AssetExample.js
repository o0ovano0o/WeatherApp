import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Path } from "react-native-svg";
import { Actions } from 'react-native-router-flux';
import EntypoIcon from "react-native-vector-icons/Entypo";

const gotoDia = () => {
  Actions.dia()
}

function AssetExample(props) {
  return (

    <TouchableOpacity style={styles.container} onPress={gotoDia} >
      <EntypoIcon name="chevron-small-up" style={styles.icon3}></EntypoIcon>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  container: {
    height:40,
    width:40,
    top:340,
    left:278,
    borderRadius: 40,
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    position: "absolute",
    top: -1,
    left: 0
  },
});

export default AssetExample;
