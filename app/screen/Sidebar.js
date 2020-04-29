import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Keyboard,
  StatusBar
} from "react-native";

import * as Animatable from 'react-native-animatable'

import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View>
      <StatusBar hidden={false}></StatusBar>
      <Animatable.View animation="slideInRight" duration={4000}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
      </Animatable.View>
      </View>
    );
  }
}
