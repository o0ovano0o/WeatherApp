import React, { Component } from "react";
import { Text, View, StyleSheet,TouchableOpacity,ScrollView,Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as weatherActions from '../actions';
import {
  LineChart,
} from "react-native-chart-kit";



const getTime = data => {
  if(data=='now'){
    var date = new Date();
    var hours = date.getDay();
    var minutes = "0" + date.getMinutes();
    return hours + ':' + minutes.substr('-2');
  }
  var date = new Date(data * 1000);
  var day = date.getDate();
  var month =  date.getMonth() +1;
  return day + '-' + month;
};

const goToHome = () => {
      Actions.home()
    }

class next5days extends Component {


  render(){
    const { state } = this.props;
    const { weatherDatas,weatherData } = this.props.state;

    const {timezone,daily} = state.weatherDatas;
    const screenWidth = Dimensions.get('window').width;
    const render=(list)=>{
      return list.map((element,index) => <Text key={`${index}`}>{` ${getTime(element.dt)} `}  {element.temp.day}  {`${element.temp.min} `}</Text>);
    }
    const temp= daily.map(item =>  item.temp.day);
    const time= daily.map(item => getTime(item.dt));
    const uvi= daily.map(item => item.uvi);
    const humidity= daily.map(item => item.humidity);
    return (
         <ScrollView style={styles.container}>

      <LineChart
    data={{
      labels: time,
      datasets: [
        {
          data: temp
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix="*C"
    yAxisInterval={50} // optional, defaults to 1
    chartConfig={chartConfig}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
      margin:5
    }}
  />
  <LineChart
    data={{
      labels: time,
      datasets: [
        {
          data: uvi
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix="UV"
    yAxisInterval={50} // optional, defaults to 1
    chartConfig={chartConfig}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
      margin:5
    }}
  />
  <LineChart
    data={{
      labels: time,
      datasets: [
        {
          data: humidity
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix="%"
    yAxisInterval={50} // optional, defaults to 1
    chartConfig={chartConfig}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
      margin:5
    }}
  />

    </ScrollView>
  );
  }

}
const  chartConfig={
  backgroundColor: "#e26a00",
  backgroundGradientFrom: "#fb8c00",
  backgroundGradientTo: "#ffa726",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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
});
