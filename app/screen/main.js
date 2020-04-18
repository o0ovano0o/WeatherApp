import React from 'react';
import { composeWithDevTools } from 'remote-redux-devtools';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import WeatherApp from './MainScreen';
import searchReducer from '../reducers/search';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tomorrow from './Tomorrow.js';
import Next5 from './next5days.js';
import Dia from './Dia.js';
import { StyleSheet,Image} from 'react-native';
const Drawer = createDrawerNavigator();
const logger = createLogger();
const store = createStore(searchReducer, composeWithDevTools(
    applyMiddleware(thunk, promise, logger),
));

const Main = () =>
    (<Provider store={store}>
      <WeatherApp />
    </Provider>);

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
    const styles = StyleSheet.create({
      logo:{
        height: 60,
        width:60,
        borderRadius:50,
      },
    });
