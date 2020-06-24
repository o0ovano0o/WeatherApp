import * as React from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity,ScrollView,SafeAreaView,Image,Animated} from 'react-native';
import Constants from 'expo-constants';

// màn hình chờ chuyển giao khi load data
export default class Splash extends React.Component {

  state={
    logoOpacity: new Animated.Value(0),
    titlemargintop: new Animated.Value(200)
  }
  async componentDidMount(){
    Animated.sequence([
        Animated.timing(this.state.logoOpacity,{
            toValue:1,
            duration: 1000,
        }),
        Animated.timing(this.state.titlemargintop,{
            toValue:10,
            duration: 400,
        }),
    ]).start(()=>{

    })
  }
  render() {

    return (
      <View style={styles.container}>
          <Image style={styles.logo} source={require('../../assets/images/icon.png')} />
          <Animated.Text style={{...styles.title, marginTop: this.state.titlemargintop }}>Thời tiết</Animated.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems:'center',
  },
 title:{
   margin:20,
   fontWeight:'bold',
   fontSize: 30,
   fontFamily:'',
   color:'black'
 },
  logo:{
    height: 100,
    width:100,
    borderRadius:50,
  },
});
