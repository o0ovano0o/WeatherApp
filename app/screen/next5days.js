import React, { Component } from "react";
import { Text, View, StyleSheet,TouchableOpacity,ScrollView,Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { composeWithDevTools } from 'remote-redux-devtools';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as weatherActions from '../actions';

import store from '../reducers/daysData'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


  const goToHome = () => {
  Actions.home()
}
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



class MainScreen extends Component {

  render(){
    const { state } = this.props;
    const {timezone,daily} = state.weatherDatas;
    const screenWidth = Dimensions.get('window').width
    const render=(list)=>{
      return list.map((element,index) => <Text key={`${index}`}>{` ${getTime(element.dt)} `}  {element.temp.day}  {`${element.temp.min} `}</Text>);
    }
    const temp= daily.map(item =>  item.temp.day);
    const time= daily.map(item => getTime(item.dt));
    return (
         <View style={styles.container}>
      <TouchableOpacity style = {{ top:0,left:0 }} onPress ={goToHome}>
         <Text>Return</Text>

      </TouchableOpacity>

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
    </View>
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
)(MainScreen);

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
