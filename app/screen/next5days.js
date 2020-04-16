import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default function App() {
  const goToHome = () => {
  Actions.home()
}
  return (
    <View style={styles.container}>
      <TouchableOpacity style = {{ top:0,left:0 }} onPress ={goToHome}>
         <Text>Return</Text>
      </TouchableOpacity>
      <Text style={styles.paragraph}>
       Next 5 days
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
