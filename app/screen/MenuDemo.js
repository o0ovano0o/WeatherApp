import * as React from 'react';
import { View, Text, Button,TouchableOpacity,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import {Main1, Main2, Tom, Today, Search, CurrentWeather, Maptemp} from './main.js'
import MapView from './MapView';
import Webview from './Webview';
function Feed({ navigation }) {
  return (
    <View style={{ flex: 1 }}>

      <Main1/>

        <TouchableOpacity style={{width: 31,
                                  height: 30,
                                  position: "absolute",top:10, left:30
                                }}
                      onPress={() => navigation.openDrawer()}
                                  >
          <FontAwesomeIcon
                name="align-left"
                style={styles.icon}
          ></FontAwesomeIcon>
        </TouchableOpacity>

    </View>
  );
}




const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Thời tiết trong ngày" component={Feed} />
      <Drawer.Screen name="Chi tiết trong ngày" component={Today} />
      <Drawer.Screen name="Thời tiết 7 ngày tới" component={Main2} />
      <Drawer.Screen name="Thời tiết ngày mai" component={Tom} />
      <Drawer.Screen name="Tìm kiếm theo bản đồ" component={MapView}/>
      <Drawer.Screen name="Bản đồ thời tiết" component={Webview}/>
    </Drawer.Navigator>
  );
}
 class App extends React.Component  {
    render(){
      return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
    }
  }
  const styles = StyleSheet.create({
    container: {
      height:40,
      width:40,
      top:-69,
      left:275,
      borderRadius: 40,
    },
    icon: {
      color: "white",
      fontSize: 20,
      position: "absolute",
      top: 0,
      left: 0
    },
  });
export default App;
