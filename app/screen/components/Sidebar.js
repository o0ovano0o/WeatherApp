import React, { Component } from "react";
import { View, Text, FlatList, Button} from "react-native";
import { ListItem, SearchBar,List } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Splash from './Splash';
import file  from '../../assets/citybig.json';
import * as weatherActions from '../../actions';
const gotoHome=()=>{
  Actions.home()
}
class FlatListDemo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      temp: [],
      error: null,
      search: '',
    };
  }

  componentDidMount() {
    this.getData();
  }

   getData = async ()  => {

    this.setState({ loading: true });
     try {
        this.setResult(file);
     } catch (e) {
        this.setState({ error: 'Error Loading content', loading: false });
     }
  };
  async fetchNewData(item){
    this.setState({ loading: true });
    await this.props.actions.searchByCoordinates(item.vt.lat,item.vt.lon);
    await this.props.actions.search5daysByCoordinates(item.vt.lat,item.vt.lon);
    gotoHome();
  }
  setResult = (res) => {
    this.setState({
      data: [],
      temp: res,
      error: res.error || null,
      loading: false
    });
  }

  renderHeader = () => {
      return <SearchBar placeholder="Tìm kiếm"
          lightTheme round editable={true}
          value={this.state.search}
          onChangeText={this.updateSearch} />;
  };

  updateSearch = search => {
        this.setState({ search }, () => {
            if (search.length < 1) {
                this.setState({
                    data: []
                });
                return;
            }

            this.state.data = this.state.temp.filter(function(item){
                return item.name.includes(search);
              }).map(function({id, name, vt}){
                return {id, name, vt};
            });
        });
  };

  render() {
    return (
      this.state.loading ?
        <View style={{ flex: 1, flexDirection: 'column',justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{fontFamily:'montserrat-700',fontSize:22, fontWeight:'bold' }}>Loadding {this.state.search}...</Text>
        </View> :
        <FlatList
            ListHeaderComponent={this.renderHeader}
            data={this.state.data}
            keyExtractor={item => {`${item.id}`}}
            renderItem={({ item }) => (
            <ListItem
                roundAvatar
                title={`${item.name}`}
                eyExtractor={item => {`${item.id}`}}
                bottomDivider
                onPress={
                  ()=> {
                    this.setState({ search: item.name})
                    this.fetchNewData(item)
                  }
                }
            />

        )}
      />
    );
  }
}


export default connect(state => ({
  state,
}),
  dispatch => ({
    actions: bindActionCreators(weatherActions, dispatch),
  }),
)(FlatListDemo);