import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class Webview extends Component {
  render() {
    return (
      <WebView
        source={{
          uri: 'https://openweathermap.org/weathermap?basemap=map&cities=false&layer=temperature&lat=21.1665&lon=106.3257&zoom=4'
        }}
        style={{ marginTop: -88 }}
      />
    );
  }
}