import React,{ Component } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import api from '../../actions/api';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 21.027763;
const LONGITUDE = 105.834160;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
import MaterialIconTextButtonsFooter from "../../components/MaterialIconTextButtonsFooter";
class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pin: {
        latitude: 0,
        longitude: 0
      },
      city: '',
      temperature: '',
      description: ''
    };

    this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
  }

  // triggered when user starts dragging the map, and then stops
  onRegionChangeComplete({ longitude, latitude }) {
    console.log('map moved!');
    this.setState({
      pin: { longitude, latitude }
    });

    api(latitude, longitude).then((data) => {
      this.setState(data);
      console.log(this.state);
    }).catch(err => console.log(err));
  }

  render() {
    const { city, temperature, description } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          onRegionChangeComplete={this.onRegionChangeComplete}
          style={styles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
        >
          <Marker
            coordinate={this.state.pin}
            title={this.state.city}
          />
        </MapView>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{ city }</Text>
          <Text style={styles.text}>{ temperature } C</Text>
          <Text style={styles.text}>{ capitalize(description) }</Text>
        </View>
        <MaterialIconTextButtonsFooter></MaterialIconTextButtonsFooter>
      </View>
    );
  }
}

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#f5fcff'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 5,
    marginTop: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontFamily: 'montserrat-regular'
  }
});

export default Weather;
