
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import sty from '../assets/style';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, ScrollView,ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  LineChart,
} from "react-native-chart-kit";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as weatherActions from '../actions';



class Line extends Component {
  render() {
    const { data, time } = this.props;
    return (
      <View >

        <LineChart
          data={{
            labels: time,
            datasets: [
              {
                data: data,
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={200}
          yAxisLabel=""
          yAxisSuffix={'C'}
          yAxisInterval={50} // optional, defaults to 1
          chartConfig={chartConfig3}
          bezier
          style={{
            bottom: 0,
            fontFamily: "montserrat-regular"
          }}
        />
      </View>
    );
  }
}
const chartConfig3 = {
  backgroundGradientFrom: "white",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#59ADFF",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(62, 142, 219, ${opacity})`,
  style: {
    borderRadius: 16
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#ffa726"
  }
}
const getTime = data => {
  var date = new Date(data * 1000);
  var hours = date.getHours();
  var strTime = hours;
  return strTime;
};
const getDay = data => {
  var date = new Date(data * 1000);
  var day = date.getDate();
  var now = new Date();
  var now_day = now.getDate();
  var hour = date.getHours();
  return (day === now_day && hour % 2 === 0) ? true : false;
};
const getFullDay = data => {
  var date = new Date(data * 1000);
  var day = date.getDate();
  var now = new Date();
  var now_day = now.getDate();
  return day === now_day ? true : false;
};

class App extends Component {

  render() {
    const { state } = this.props;
    let { hourly } = state.weatherDatas;
    const render = (list) => {
      return list.map((element, index) => <Text key={`${index}`}>{` ${getTime(element.dt)} `}  {element.temp.day}  {`${element.temp.min} `}</Text>);
    }
    let h = hourly.filter(item => getDay(item.dt) === true);
    let hf = hourly.filter(item => getFullDay(item.dt) === true);
    const daytemp = hourly.filter(item => getFullDay(item.dt) === true).map(item => item.temp);
    const icon = hourly.filter(item => getFullDay(item.dt) === true).map(item => item.weather[0].icon);
    const temp = h.map(item => item.temp);
    const time = h.map(item => getTime(item.dt));
    const hum =  hourly.filter(item => getFullDay(item.dt) === true).map(item => item.humidity);
    const setIcon = (data) => {
      data= '01d';
      if (data == '01d') {
        return (
          <FeatherIcon
            name="sun"
            style={styles.icon7}
          ></FeatherIcon>
        )
      }
      if (data == '02d') {
        return (
          <Ionicons name="ios-partly-sunny" style={styles.icon7}></Ionicons>
        )
      }
      if (data == '03d') {
        return (
        <EntypoIcon
          name="icloud"
          style={styles.icon7}
        ></EntypoIcon>)
      }
      if (data == '04d') {
        return (
        <EntypoIcon
          name="cloud"
          style={styles.icon7}
        ></EntypoIcon>)
      }
      if (data == '09d') {
        return (
        <FeatherIcon
          name="cloud-drizzle"
          style={styles.icon7}
        ></FeatherIcon>)
      }
      if (data == '10d') {
        return (
        <FeatherIcon name="cloud-rain" style={styles.icon7}></FeatherIcon>)
      }
      if (data == '11d') {
        return (
        <FeatherIcon
          name="cloud-lightning"
          style={styles.icon7}
        ></FeatherIcon>)
      }
      if (data == '13d') {
        return (
        <IoniconsIcon name="md-snow" style={styles.icon7}></IoniconsIcon>)
      }
      if (data == '50d') {
       return (  <IoniconsIcon name="md-snow" style={styles.icon7}></IoniconsIcon>)
      }
    }

    const rendertemp = ( data) => {
      return data.map((item,index) => (
        <View style={styles.rect9} key={`${index}`}>
              <Text style={styles.loremIpsum4}>{`${getTime(item.dt)}`} giờ</Text>
              {setIcon(item.weather[0].icon)}
              <View style={styles.loremIpsum5Row}>
                <Text style={styles.loremIpsum5}>{`${item.temp}`}</Text>
                <Text style={styles.c10}>C</Text>
              </View>
            </View>
      ))
    }
    const renderhum = (data) => {
      return data.map((item,index)=>(
        <View style={styles.rect911} key={`${index}`}>
                <Text style={styles.loremIpsum22}>{`${getTime(item.dt)}`} giờ</Text>
                <Text style={styles.loremIpsum23}>{`${item.humidity}%`}</Text>
        </View>
      ))
    }
    return (
      <View>
          <View style={{ padding:0,marginBottom:35}}>
            <ScrollView >
              <View style={styles.container}>
                <View style={styles.iconRow}>
                  <FontAwesomeIcon
                    name="thermometer-2"
                    style={styles.icon}
                  ></FontAwesomeIcon>
                  <Text style={styles.nhiệtDộ}>{`Biểu đồ`}</Text>
                </View>

                <View style={styles.rect}>
                  <Line data={daytemp} time={time} ></Line>
                </View>

                <View style={styles.icon4Row}>
                <MaterialCommunityIconsIcon
                      name="oil-temperature"
                      style={styles.icon4}
                    ></MaterialCommunityIconsIcon>
                  <Text style={styles.loremIpsum12}>Nhiệt độ chi tiết</Text>
                </View>

                <View style={styles.rect8Row}>
                  <ScrollView horizontal={true}>
                    {rendertemp(hf)}
                  </ScrollView>
                </View>

                <View style={styles.rect6}>
                  <View style={styles.icon5Row}>
                    <EntypoIcon name="drop" style={styles.icon4}></EntypoIcon>
                    <Text style={styles.loremIpsum}>Độ ẩm</Text>
                  </View>
                  <View style={styles.rect7}>
                    <ScrollView horizontal={true} >
                      {renderhum(hf)}
                    </ScrollView>
                  </View>
                </View>
            </View>
          </ScrollView>
      </View>
      <MaterialIconTextButtonsFooter
        style={styles.materialIconTextButtonsFooter1111}
      ></MaterialIconTextButtonsFooter>
    </View>
    );
  }

}
export default connect(state => ({
  state,
}),
  dispatch => ({
    actions: bindActionCreators(weatherActions, dispatch),
  }),
)(App);
const styles = StyleSheet.create({
  container: {
 backgroundColor: "rgba(255,255,255,1)",
 borderRadius:35,
 width:Dimensions.get("window").width,
  },
  materialIconTextButtonsFooter1111: {
    top:Dimensions.get("window").height-144,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  icon: {
    color: "rgba(17,16,16,1)",
    fontSize: 22
  },
  nhiệtDộ: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-700",
    marginLeft: 7,
  },
  iconRow: {
    height: 22,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 260
  },
  rect: {
    width: 360,
    height: 200,
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(155,155,155,100)",
    backgroundColor:"white"
  },
  rect6: {
    width: 360,
    height: 180,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "rgba(155,155,155,100)",
  },
  icon5: {
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    height: 22,
    width: 22
  },
  loremIpsum: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-700",
    marginLeft: 8,
    marginTop: 3
  },
  icon5Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 216
  },

  rect7: {
    width: 340,
    height: 120,
    marginTop: 8,
    marginLeft: 10
  },
  icon4: {
    color: "rgba(0,0,0,1)",
    fontSize: 22
  },
  loremIpsum12: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-700",
    marginLeft: 2,
    marginTop: 3
  },
  icon4Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 16,
    marginRight: 226,
  },

  rect8: {
    width: 60,
    height: 90,
    backgroundColor: "rgba(213,240,249,1)",
    borderRadius: 13
  },
  loremIpsum2: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-700",
    marginTop: 7,
    marginLeft: 13
  },
  icon6: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    height: 25,
    width: 25,
    marginTop: 9,
    marginLeft: 19
  },
  loremIpsum3: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-700"
  },
  c9: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-700",
    marginLeft: 6
  },
  loremIpsum3Row: {
    height: 15,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 13,
    marginRight: 17
  },


  rect9: {
    width: 60,
    height: 90,
    backgroundColor: "rgba(213,240,249,1)",
    borderRadius: 13,
    marginLeft: 10,
    marginTop: 1
  },
  rect911: {
    width: 60,
    height: 90,
    borderColor:"rgba(213,240,249,1)",
    borderWidth:3,
    borderRadius: 13,
    marginLeft: 10,
    marginTop: 1
  },
  loremIpsum4: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-700",
    marginTop: 7,
    marginLeft: 11
  },
  icon7: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    height: 25,
    width: 25,
    marginTop: 9,
    marginLeft: 20
  },
  loremIpsum5: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-700"
  },
  c10: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-700",
    marginLeft: 0
  },
  loremIpsum5Row: {
    height: 15,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 13,
    marginRight: 15
  },


  rect20: {
    width: 60,
    height: 70,
  },
  loremIpsum20: {
    color: "black",
    fontSize: 12,
    fontFamily: "montserrat-700",
    marginTop: 14,
    marginLeft: 13
  },
  loremIpsum21: {
    color: "black",
    fontSize: 16,
    fontFamily: "montserrat-700",
    marginTop: 14,
    marginLeft: 12
  },

  rect22: {
    width: 60,
    height: 70,
    marginLeft: 10,
    marginTop: 1
  },
  loremIpsum22: {
    color: "black",
    fontSize: 12,
    fontFamily: "montserrat-700",
    marginTop: 14,
    marginLeft: 11
  },
  loremIpsum23: {
    color: "black",
    fontSize: 16,
    fontFamily: "montserrat-700",
    marginTop: 14,
    marginLeft: 12
  },

  rect8Row: {
    height: 91,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 10,
    marginRight: 9
  },
  container1: {
    backgroundColor: 'white',
    borderRadius:30,
    top:20,
    height:Dimensions.get("window").height - 90
  },
});
