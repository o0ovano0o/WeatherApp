import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Actions } from 'react-native-router-flux';
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import * as weatherActions from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// class màn hình định vị
class Dv extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: null,
      search: '',
    };
  }
  // hàm lấy thông tin địa điểm hiện tại
  getLocation = ()=> {
    navigator.geolocation.getCurrentPosition( // eslint-disable-line
      async (position) => {
        this.setState({loading: true});
        const lat = position.coords.latitude.toString();
        const lon = position.coords.longitude.toString();
        await this.props.actions.searchByCoordinates(lat, lon);
        await this.props.actions.search5daysByCoordinates(lat, lon);
        Actions.home();
      },
      () => {
        const errorMessage = 'Could not fetch weather for your location';
        this.props.actions.setErrorMessage(errorMessage);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
  }
  render(){
  return (
    this.state.loading ?
    <View style={{ flex: 1, flexDirection: 'column',justifyContent: 'center', alignItems: 'center' }}>
      <Text>Loadding .....</Text></View>
      :
    <TouchableOpacity style={styles.container} onPress={() => this.getLocation()}>
                <MaterialCommunityIconsIcon
                  name="map-marker"
                  style={styles.icon3}
                /></TouchableOpacity>

  );
  }
}
export default connect(state => ({
  state,
}),
  dispatch => ({
    actions: bindActionCreators(weatherActions, dispatch),
  }),
)(Dv);

const styles = StyleSheet.create({
  container: {
    height:100,
    width:100,
    top:50,
    left:150,
    borderRadius: 40,
  },
  icon3: {
    color: "black",
    fontSize: 60,
    position: "absolute",
    top: -1,
    left: 0
  },
});
