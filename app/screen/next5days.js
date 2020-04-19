import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as weatherActions from '../actions';
import {
  LineChart,
} from "react-native-chart-kit";
import { Container, Tab, Tabs, TabHeading, View, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon, Button, Image } from 'native-base';
import Svg, { Path } from "react-native-svg";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";



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
    return (
      <Container>
        <Tabs >
          <Tab heading={
            <TabHeading style={{ backgroundColor: '#DB8D75', color: 'white' }}>
              <Text style={{ color: 'white', fontFamily: 'montserrat-regular' }}>Nhiệt độ</Text>
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
        </Tabs>


        <View style={{ flex: 1, margin: 3}}>
          <DeckSwiper
            ref={(c) => this._deckSwiper = c}
            dataSource={daily}
            renderEmpty={() =>
              <View style={{ alignSelf: "center" }}>
                <Text>Over</Text>
              </View>
            }
            renderItem={(item, index) =>
              <View  style={styles.rect}>
                      <Body >
                      <View style={styles.group}>
                        <View >
                          <View style={styles.iconRow}>
                            <MaterialCommunityIconsIcon
                              name="oil-temperature"
                              style={styles.icon}
                            ></MaterialCommunityIconsIcon>
                            <MaterialCommunityIconsIcon
                              name="brightness-1"
                              style={styles.icon3}
                            ></MaterialCommunityIconsIcon>
                            <MaterialCommunityIconsIcon
                              name="brightness-2"
                              style={styles.icon4}
                            ></MaterialCommunityIconsIcon>
                          </View>
                          <View style={styles.textRow}>
                            <Text style={styles.text}>{`${Math.ceil(item.temp.day)}*C`}</Text>
                            <Text style={styles.text2}>{`${Math.ceil(item.temp.eve)}*C`}</Text>
                            <Text style={styles.text6}>{`${Math.ceil(item.temp.night)}*C`}</Text>
                          </View>
                          <View style={styles.icon2Row}>
                            <EntypoIcon name="cloud" style={styles.icon2}></EntypoIcon>
                            <FeatherIcon name="wind" style={styles.icon5}></FeatherIcon>
                            <FeatherIcon  name="cloud-rain"  style={styles.icon6}></FeatherIcon>
                          </View>
                          <View style={styles.text5Row}>
                            <Text style={styles.text5}>{`${item.clouds}%`}</Text>
                            <Text style={styles.text4}>{`${Math.ceil(item.wind_speed)}m/s`}</Text>
                            <Text style={styles.text3}>{`${Math.ceil(item.rain)||0}mm`}</Text>
                          </View>
                          <View style={styles.icon7Row}>
                          <Thumbnail source={{uri:`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}} />
                            <View style={styles.ngayHomNayColumn}>
                              <Text style={styles.ngayHomNay}>{`${getDay(item.dt)}`}</Text>
                              <Text style={styles.ngayHomNay1}>{ `${item.weather[0].description}`}</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </Body>

              </View>
            }
          />
        </View>


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
  group: {
    alignSelf: "center"
  },
  rect: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 40,
    borderColor: "rgba(81,191,192,1)",
    borderWidth: 2,
    elevation: 4,
    marginBottom:5

  },
  path: {
    width: 1,
    height: 1,
    marginTop: 10,
    marginLeft: 0
  },
  icon: {
    color: "rgba(45,155,207,1)",
    fontSize: 35,
    height: 40,
    width: 36
  },
  icon3: {
    color: "rgba(45,155,207,1)",
    fontSize: 35,
    height: 40,
    width: 36,
    marginLeft: 68
  },
  icon4: {
    color: "rgba(45,155,207,1)",
    fontSize: 35,
    height: 40,
    width: 36,
    marginLeft: 79
  },
  iconRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 42,
    marginRight: 32
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
    marginLeft: 80
  },
  textRow: {
    height: 16,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 49,
    marginRight: 33
  },
  icon2: {
    color: "rgba(45,155,207,1)",
    fontSize: 35,
    height: 40,
    width: 36
  },
  icon5: {
    color: "rgba(45,155,207,1)",
    fontSize: 35,
    height: 40,
    width: 36,
    marginLeft: 69
  },
  icon6: {
    color: "rgba(45,155,207,1)",
    fontSize: 35,
    height: 40,
    width: 36,
    marginLeft: 79
  },
  icon2Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 41,
    marginRight: 32
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
    marginLeft: 75
  },
  text3: {
    color: "#121212",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    marginLeft: 80
  },
  text5Row: {
    height: 16,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 40,
    marginRight: 33
  },
  icon7: {
    color: "rgba(45,155,207,1)",
    fontSize: 68,
    height: 68,
    width: 68
  },
  ngayHomNay: {
    color: "#121212",
    fontSize: 14,
    fontFamily: "montserrat-regular",
    lineHeight: 16
  },
  ngayHomNay1: {
    color: "#121212",
    fontSize: 14,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    marginTop: 13
  },
  ngayHomNayColumn: {
    width: 130,
    marginLeft: 30,
    marginTop: 5,
    marginBottom: 5
  },
  icon7Row: {
    height: 68,
    flexDirection: "row",
    marginLeft: 49,
    marginRight: 74
  }
});
