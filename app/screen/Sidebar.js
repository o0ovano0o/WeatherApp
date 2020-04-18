import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,ImageBackground,Image,ScrollView,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Tomorrow from './Tomorrow.js';
import Next5 from './next5days.js';
import Main from './main.js';
import Dia from './Dia.js';
import sty from '../assets/style';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();



let time = new Date();

export default function App(props)  {
  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Main} />
          <Drawer.Screen name="next5days" component={Next5} />
          <Drawer.Screen name="Tomorrow" component={Tomorrow} />
          <Drawer.Screen name="More" component={Dia} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}
