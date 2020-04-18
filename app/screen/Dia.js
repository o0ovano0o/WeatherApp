import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,ImageBackground,Image,ScrollView,SafeAreaView,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import sty from '../assets/style';

const getbg = data =>{
  let imgbg={
    bgcolor:
          (<ImageBackground
            source={require('../assets/images/hot-AM.png')} resizeMode="stretch" style={sty.image} imageStyle={sty.image_imageStyle}>
          </ImageBackground>),
  };
  if(data=='now'){
    var date = new Date();
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    if (hours>5&&hours<9){
      imgbg.bgcolor=(<ImageBackground source={require('../assets/images/nice-AM.png')} resizeMode="stretch" style={sty.image} imageStyle={sty.image_imageStyle}>
      </ImageBackground>);
    }
    else if(hours>=22 || hours<3){
      imgbg.bgcolor=(<ImageBackground source={require('../assets/images/night-tim-PM.png')} resizeMode="stretch" style={sty.image} imageStyle={sty.image_imageStyle}>
      </ImageBackground>);
    }
    else if(hours>=9&&hours<17){
          imgbg.bgcolor=(<ImageBackground source={require('../assets/images/hot-AM.png')} resizeMode="stretch" style={sty.image} imageStyle={sty.image_imageStyle}>
          </ImageBackground>);
    }
    else{
          imgbg.bgcolor=(<ImageBackground
            source={require('../assets/images/Night-PM.png')}resizeMode="stretch"style={sty.image}imageStyle={sty.image_imageStyle}>
          </ImageBackground>);
    }
  }
  return imgbg;
};






let time = new Date();

export default function App(props)  {

  return (
    <View>

      {getbg('now').bgcolor}

      <View style={styles.container}>
          <View style={styles.buttonWrapper1}>
          </View>
          <View style={{ height:570, width:360, padding:20, paddingTop:-10}}>
            <ScrollView>
              <Text>Ý tưởng là để tạo header có thể đè lên scrollview đó là sử dụng position: ‘absolute và thiết lập margin top của scrollview một khoảng đúng bằng chiều cao của phần header. Sau đó, chúng ta sẽ tạo animation cho chiều cao header dùng ScrollView scroll position.</Text>
              <Text>Ý tưởng là để tạo header có thể đè lên scrollview đó là sử dụng position: ‘absolute và thiết lập margin top của scrollview một khoảng đúng bằng chiều cao của phần header. Sau đó, chúng ta sẽ tạo animation cho chiều cao header dùng ScrollView scroll position.</Text>
              <Text>Ý tưởng là để tạo header có thể đè lên scrollview đó là sử dụng position: ‘absolute và thiết lập margin top của scrollview một khoảng đúng bằng chiều cao của phần header. Sau đó, chúng ta sẽ tạo animation cho chiều cao header dùng ScrollView scroll position.</Text>
              <Text>Ý tưởng là để tạo header có thể đè lên scrollview đó là sử dụng position: ‘absolute và thiết lập margin top của scrollview một khoảng đúng bằng chiều cao của phần header. Sau đó, chúng ta sẽ tạo animation cho chiều cao header dùng ScrollView scroll position.</Text>
              <Text>Ý tưởng là để tạo header có thể đè lên scrollview đó là sử dụng position: ‘absolute và thiết lập margin top của scrollview một khoảng đúng bằng chiều cao của phần header. Sau đó, chúng ta sẽ tạo animation cho chiều cao header dùng ScrollView scroll position.</Text>
              <Text>Ý tưởng là để tạo header có thể đè lên scrollview đó là sử dụng position: ‘absolute và thiết lập margin top của scrollview một khoảng đúng bằng chiều cao của phần header. Sau đó, chúng ta sẽ tạo animation cho chiều cao header dùng ScrollView scroll position.</Text>
              <Text>Ý tưởng là để tạo header có thể đè lên scrollview đó là sử dụng position: ‘absolute và thiết lập margin top của scrollview một khoảng đúng bằng chiều cao của phần header. Sau đó, chúng ta sẽ tạo animation cho chiều cao header dùng ScrollView scroll position.</Text>
            </ScrollView>
          </View>
      </View>
      <MaterialIconTextButtonsFooter
        style={sty.materialIconTextButtonsFooter}
      ></MaterialIconTextButtonsFooter>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    height:800,
    backgroundColor: 'white',

    borderRadius:50,
    top:60
  },
  buttonWrapper1:{
    height:40,
    width:40,
    borderRadius:40,
    backgroundColor:'black',
    top:-25,
    left:155
  },
  buttonWrapper2:{
    height:40,
    width:40,
    borderRadius:40,
    backgroundColor:'black',
    top:0,
    left:0
  },
  back_:{
    height:40,
    width:40,
    top:-25,
    left:150,
    borderRadius: 40,
    backgroundColor: '#A080EB'
  },
  icon3: {
    color: "white",
    fontSize: 40,
    position: "absolute",
    top: -1,
    left: 0
  },
  icon: {
    color: "rgba(248,242,242,1)",
    fontSize: 20,
    width: 30,
    height: 30,
    position: "absolute",

  },
});
