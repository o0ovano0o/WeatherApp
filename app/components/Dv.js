import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Actions } from 'react-native-router-flux';
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
const gotoDv = () => {
  Actions.Dv();
}
export default class Dv extends Component {
  constructor(props){
    super(props)
  }
  render(){
  return (

    <TouchableOpacity style={styles.container} onPress={()=>this.props.onPress()}>
                <MaterialCommunityIconsIcon
                  name="map-marker"
                  style={styles.icon3}
                /></TouchableOpacity>

  );
  }
}

const styles = StyleSheet.create({
  container: {
    height:40,
    width:40,
    top:10,
    left:310,
    borderRadius: 40,
  },
  icon3: {
    color: "white",
    fontSize: 28,
    position: "absolute",
    top: -1,
    left: 0
  },
});
