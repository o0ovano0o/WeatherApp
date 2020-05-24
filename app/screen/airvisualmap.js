import React, { Component } from 'react';
import {

  View,

} from "react-native";
import { WebView } from 'react-native-webview';
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
const myrule='document.getElementsByClassName("z500 top-left-block")[0].style.visibility="hidden";';
export default class Webview extends Component {
  render() {
    return (
<View style={{flex:1}}>
      <WebView
        source={{
          uri: 'https://www.iqair.com/air-quality-map'
        }}
        javaScriptEnabled
      injectedJavaScript={'function injectRules() {' + myrule + '};injectRules();'}
      />
      <MaterialIconTextButtonsFooter style={{bottom:0}}></MaterialIconTextButtonsFooter>
</View>


    );
  }
}
