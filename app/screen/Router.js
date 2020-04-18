import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { StyleSheet } from 'react-native'
import {App, Main2} from './main.js'
import Tomorrow from './Tomorrow.js'
import Dia from './Dia.js'
import { StatusBar } from 'react-native';
const Routes = () => (
   <Router  navigationBarStyle={styles.navBar}  titleStyle={styles.navTitle} sceneStyle={styles.routerScene} barButtonTextStyle={styles.barButtonTextStyle} barButtonIconStyle={styles.barButtonIconStyle}>
      <Scene key = "root">
         <Scene key = "home" component = {App}  hideNavBar={true}  initial = {true} />
         <Scene key = "next5" component = {Main2} title="Next 7 days" leftButtonIconStyle={styles.navIcon}/>
         <Scene key = "tomorrow" component = {Tomorrow} title="Tomorrow" />
         <Scene key = "dia" component = {Dia}  title="Detail"     />
      </Scene>
   </Router>
)
const styles = StyleSheet.create({
   navBar: {
     backgroundColor: "#385999", // changing navbar color
     paddingTop:0,
     marginTop:0,

   },
   navTitle: {
     color: 'white', // changing navbar title color
     justifyContent: "center",
     top:-10,
   },
   routerScene: {
     paddingTop: 0, // some navbar padding to avoid content overlap
     marginTop:0
   },
   barButtonTextStyle:{
    color:'white',
    top:-20
    },
    barButtonIconStyle:{
        tintColor:'white',
        top:-20
    },
 })
export default Routes;
