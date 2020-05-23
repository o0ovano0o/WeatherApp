import React, { Component } from 'react';
import {

  View,

} from "react-native";
import { WebView } from 'react-native-webview';
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
export default class Webview extends Component {
  render() {
    return (
<View style={{flex:1}}>
      <WebView
        source={{
          uri: 'https://openweathermap.org/weathermap?basemap=map&cities=false&layer=temperature&lat=21.1665&lon=106.3257&zoom=4'
        }}
        style={{ marginTop: -70 }}
      />
      <MaterialIconTextButtonsFooter style={{bottom:0}}></MaterialIconTextButtonsFooter>
</View>


    );
  }
}
