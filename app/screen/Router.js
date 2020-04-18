import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { StyleSheet } from 'react-native'
import Home from './main.js'
import Next5 from './next5days.js'
import Tomorrow from './Tomorrow.js'
import Dia from './Dia.js'
const Routes = () => (
   <Router >
      <Scene key = "root">
         <Scene key = "home" component = {Home} hideNavBar={true}  initial = {true} />
         <Scene key = "next5" component = {Next5}  hideNavBar={true}    />
         <Scene key = "tomorrow" component = {Tomorrow}  hideNavBar={true}    />
         <Scene key = "dia" component = {Dia}  hideNavBar={true}    />
      </Scene>
   </Router>
)
const styles = StyleSheet.create({
   navBar: {
     flex: 1,
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'red', // changing navbar color
   },
   navTitle: {
     color: 'white', // changing navbar title color
     paddingTop:5,
   },
   routerScene: {
     paddingTop: 0, // some navbar padding to avoid content overlap
   },
 })
export default Routes;
