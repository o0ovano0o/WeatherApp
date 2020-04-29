import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { StyleSheet } from 'react-native'
import {App, Main2, Tom, Today} from './main.js'
import Sidebar from './Sidebar.js'
const Routes = () => (
   <Router  navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} sceneStyle={styles.routerScene} backButtonTextStyle = {{color:'#000000'}}
   barButtonIconStyle={{ tintColor: '#000000' }} backButtonTintColor = '#ffffff' >
      <Scene key = "root">
         <Scene key = "home" component = {App}   hideNavBar={true}  initial = {true} />
         <Scene key = "next5" component = {Main2} title="7 ngày tới" />
         <Scene key = "tomorrow" component = {Tom} title="Ngày mai" narBarButtonColor="white"/>
         <Scene key = "dia" component = {Today}  title="Chi tiết"  narBarButtonColor="white"/>
         <Scene key = "Sidebar" component = {Sidebar} />
      </Scene>
   </Router>
)
const styles = StyleSheet.create({
   navBar: {
     backgroundColor: "#385999", // changing navbar color
     paddingTop:5,
     marginTop:-20,

   },
   navTitle: {
     color: 'white', // changing navbar title color
     justifyContent: "center",
     fontFamily:"montserrat-regular",
     textAlign:"center",
     alignItems:"center",
     marginLeft:30
   },
   routerScene: {
   },

 })
export default Routes;
