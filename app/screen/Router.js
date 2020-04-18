import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { StyleSheet } from 'react-native'
import {Main1, Main2} from './main.js'
import Next5 from './main1.js'
import Tomorrow from './Tomorrow.js'

const Routes = () => (
   <Router >
      <Scene key = "root">
         <Scene key = "home" component = {Main1} hideNavBar={true}  initial = {true} />
         <Scene key = "next5" component = {Main2}  hideNavBar={true}    />
         <Scene key = "tomorrow" component = {Tomorrow}  hideNavBar={true}    />
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