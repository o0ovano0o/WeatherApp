
import React, { useEffect, useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { AppRegistry, View } from 'react-native';
import Router from './app/screen/Router.js'


// import Main from './app/screen/main';
// import Next5 from './app/screen/next5days';

function useFonts(fontMap) {
  let [fontsLoaded, setFontsLoaded] = useState(false);
  (async () => {
    await Font.loadAsync(fontMap);
    setFontsLoaded(true);
  })();
  return [fontsLoaded];
}



export default props => {
  let [fontsLoaded] = useFonts({
    'montserrat-700': require('./app/assets/fonts/montserrat-700.ttf'),
    'montserrat-regular': require('./app/assets/fonts/montserrat-regular.ttf'),
    'verdana-regular': require('./app/assets/fonts/verdana-regular.ttf')
  });

 if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
     <Router />
    );
  }
};
