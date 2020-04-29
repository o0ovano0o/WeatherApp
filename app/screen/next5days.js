import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as weatherActions from '../actions';
import {
  LineChart,
} from "react-native-chart-kit";
import { Container, Tab, Tabs, TabHeading, View, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon, Button } from 'native-base';

import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";



const getTime = data => {
  const thu = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
  if (data == 'now') {
    var date = new Date();
    var hours = date.getDay();
    var minutes = "0" + date.getMinutes();
    return hours + ':' + minutes.substr('-2');
  }
  var date = new Date(data * 1000);
  var day = date.getDate();
  var datt = thu[date.getDay()];
  var month = date.getMonth() + 1;
  return day + '-' + month;
};
const getDay = data => {
  const thu = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
  var date = new Date(data * 1000);
  var now = new Date()
  var day = date.getDate();
  var datt = thu[date.getDay()];
  var month = date.getMonth() + 1;
  if (day === now.getDate()) {
    return "Ngày hôm nay"
  }
  return datt + ", ngày " + day + '/' + month;
};


class Line extends Component {
  render() {
    const { data, time, dv } = this.props;
    let chartConfig;
    if (dv === '*C') {
      chartConfig = chartConfig1;
    }
    if (dv === 'UV') {
      chartConfig = chartConfig2;
    }
    if (dv === '%') {
      chartConfig = chartConfig3;
    }
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
          yAxisSuffix={dv}
          yAxisInterval={50} // optional, defaults to 1
          chartConfig={chartConfig}
          bezier
          style={{
            // marginVertical: 8,
            // borderRadius: 16,
            // margin:5,
            bottom:0,
            fontFamily: "montserrat-regular"
          }}
        />
      </View>
    );
  }
}

const goToHome = () => {
  Actions.home()
}

class next5days extends Component {
  render() {
    const { state } = this.props;
    const { daily } = state.weatherDatas;
    const render = (list) => {
      return list.map((element, index) => <Text key={`${index}`}>{` ${getTime(element.dt)} `}  {element.temp.day}  {`${element.temp.min} `}</Text>);
    }
    const temp = daily.map(item => item.temp.day);
    const time = daily.map(item => getTime(item.dt));
    const uvi = daily.map(item => item.uvi);
    const humidity = daily.map(item => item.humidity);
    let icon;
    const setIcon= (data) =>{
      if(data=='01d'){
        dt = `../assets/images/01d.png`;
      }
      if(data=='02d'){
        icon = require(`../assets/images/02d.png`);
      }
      if(data=='03d'){
        icon = require(`../assets/images/03d.png`);
      }
      if(data=='04d'){
        icon = require(`../assets/images/04d.png`);
      }
      if(data=='09d'){
        icon = require(`../assets/images/09d.png`);
      }
      if(data=='10d'){
        icon = require(`../assets/images/10d.png`);
      }
      if(data=='11d'){
        icon = require(`../assets/images/11d.png`);
      }
      if(data=='13d'){
        icon = require(`../assets/images/13d.png`);
      }
      if(data=='50d'){
        icon = require(`../assets/images/50d.png`);
      }
    }
    return (
      <Container style={{backgroundColor:"#385999"}}>
        <View style={{ flex: 1 }} >
          <DeckSwiper
            ref={(c) => this._deckSwiper = c}
            dataSource={daily}
            renderEmpty={() =>
              <View style={{ alignSelf: "center" }}>
                <Text>Sorry!!!</Text>
              </View>
            }
            renderItem={(item, index) =>
              <View>
                {setIcon(item.weather[0].icon)}
                <Body>
                  <View style={styles.rect}>
                    <Text style={styles.ngayHomNay2}> {`${getDay(item.dt)}`} {`${item.weather[0].description}`}</Text>
                    <View style={styles.iconRow}>
                      <MaterialCommunityIconsIcon name="oil-temperature" style={styles.icon} ></MaterialCommunityIconsIcon>


                          <MaterialCommunityIconsIcon name="brightness-1" style={styles.icon3}></MaterialCommunityIconsIcon>
                          <MaterialCommunityIconsIcon name="brightness-2" style={styles.icon4} ></MaterialCommunityIconsIcon>


                    </View>

                    <View style={styles.textRow}>
                      <Text style={styles.text}>{`${Math.ceil(item.temp.day)}*C`}</Text>
                      <Text style={styles.text2}>{`${Math.ceil(item.temp.eve)}*C`}</Text>
                      <Text style={styles.text6}>{`${Math.ceil(item.temp.night)}*C`}</Text>
                    </View>

                    <View style={styles.icon2Row}>
                      <EntypoIcon name="cloud" style={styles.icon2}></EntypoIcon>
                      <FeatherIcon name="wind" style={styles.icon5}></FeatherIcon>
                      <FeatherIcon name="cloud-rain" style={styles.icon8} ></FeatherIcon>
                    </View>

                    <View style={styles.text5Row}>
                      <Text style={styles.text5}>{`${item.clouds}%`}</Text>
                      <Text style={styles.text4}>{`${Math.ceil(item.wind_speed)}m/s`}</Text>
                      <Text style={styles.text3}>{`${Math.ceil(item.rain) || 0}mm`}</Text>
                    </View>

                  </View>
                  <Image
                    source={icon}
                    resizeMode="contain"
                    style={styles.image}
                  ></Image>
                </Body>
              </View>
            }
          />
        </View>

            <View style={{flex:1,top:35}}>
        <Tabs  tabContainerStyle={{ height: 38 }}
                tabBarUnderlineStyle={{
                  height: 5,
                }}>
          <Tab heading={
            <TabHeading style={{ backgroundColor: '#DB8D75', color: 'white'}}>
              <Text style={{ color: 'white', fontFamily: 'montserrat-regular'}}>Nhiệt độ</Text>
            </TabHeading>
          }>
            <Line data={temp} dv={'*C'} time={time} />
          </Tab>

          <Tab heading={
            <TabHeading style={{ backgroundColor: '#8FC987', color: 'white' }}>
              <Text style={{ color: 'white', fontFamily: 'montserrat-regular' }}>Chỉ số UV</Text>
            </TabHeading>
          }>
            <Line data={uvi} dv={'UV'} time={time} />
          </Tab>

          <Tab heading={
            <TabHeading style={{ backgroundColor: '#59ADFF' }}>
              <Text style={{ color: 'white', fontFamily: 'montserrat-regular' }}>Độ ẩm</Text>
            </TabHeading>
          }>
            <Line data={humidity} dv={'%'} time={time} />
          </Tab>
        </Tabs></View>
      </Container>
    );
  }
}

const chartConfig1 = {
  backgroundGradientFrom: "#E67654",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#E6C0B5",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(230, 117, 84, ${opacity})`,
  style: {
    borderRadius: 16
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#ffa726"
  }
}
const chartConfig2 = {
  backgroundGradientFrom: "#3FBD2E",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#7FC476",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(113, 178, 105, ${opacity})`,
  style: {
    borderRadius: 16
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#ffa726"
  }
}
const chartConfig3 = {
  backgroundGradientFrom: "#3E8EDB",
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
export default connect(state => ({
  state,
}),
  dispatch => ({
    actions: bindActionCreators(weatherActions, dispatch),
  }),
)(next5days);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    width: 128,
    height: 45,
    borderRadius: 23,
    borderColor: "#000000",
    borderWidth: 0,
    shadowOffset: {
      height: 5,
      width: 5
    },
    padding: 7,
    shadowColor: "rgba(0,0,0,1)"
  },
  text: {
    fontFamily: "montserrat-regular"
  },
  rect: {
    width: 341,
    height: 255,
    backgroundColor:'#F0FFFF',
    borderRadius: 36,
    borderColor: "rgba(10,199,243,1)",
    borderWidth: 2,
    top:40,

  },
  ngayHomNay2: {
    color: "#121212",
    fontSize: 15,
    fontFamily: "montserrat-regular",
    lineHeight: 17,
    marginTop: 95,
    alignSelf: 'center'
  },
  icon: {
    color: "rgba(96,186,226,1)",
    fontSize: 30,
    height: 30,
    width: 30,
    marginTop: 15
  },
  ngayHomNay: {
    color: "#121212",
    fontSize: 17,
    fontFamily: "montserrat-regular",
    lineHeight: 17,
    alignSelf: 'center'
  },
  icon3: {
    color: "rgba(96,186,226,1)",
    fontSize: 29,
    height: 29,
    width: 29,
    marginTop: 15,
    marginLeft:73

  },
  icon4: {
    color: "rgba(96,186,226,1)",
    fontSize: 30,
    height: 30,
    width: 30,
    marginLeft: 74,
    marginTop: 15
  },
  icon3Row: {
    height: 30,
    flexDirection: "row",
    marginLeft: 73
  },
  ngayHomNayColumn: {
    width: 195,
  },
  iconRow: {
    height: 45,
    flexDirection: "row",
    marginTop: -5,
    marginLeft: 45,
    marginRight: 55
  },
  text: {
    color: "#121212",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    lineHeight: 16
  },
  text2: {
    color: "#121212",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    marginLeft: 70
  },
  text6: {
    color: "#121212",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    marginLeft: 70
  },
  textRow: {
    height: 16,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 44,
    marginRight: 49
  },
  icon2: {
    color: "rgba(96,186,226,1)",
    fontSize: 30,
    height: 30,
    width: 30
  },
  icon5: {
    color: "rgba(96,186,226,1)",
    fontSize: 30,
    height: 30,
    width: 30,
    marginLeft: 78
  },
  icon8: {
    color: "rgba(96,186,226,1)",
    fontSize: 30,
    height: 30,
    width: 30,
    marginLeft: 73
  },
  icon2Row: {
    height: 30,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 44,
    marginRight: 56
  },
  text5: {
    color: "#121212",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    lineHeight: 16
  },
  text4: {
    color: "#121212",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    marginLeft: 72
  },
  text3: {
    color: "#121212",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    marginLeft: 63
  },
  text5Row: {
    height: 16,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 44,
    marginRight: 50
  },
  pathFiller: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    top: -5,
    left: 75,
    width: 173,
    height: 145,
    position: "absolute"
  },

});
