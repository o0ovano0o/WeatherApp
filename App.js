

import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Main from './screen/Untitled';
import Splash from './screen/Splash';
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
    'montserrat-700': require('./assets/fonts/montserrat-700.ttf'),
    'montserrat-regular': require('./assets/fonts/montserrat-regular.ttf'),
    'verdana-regular': require('./assets/fonts/verdana-regular.ttf')
  });

 if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
     <Main/>
    );
  }
};
