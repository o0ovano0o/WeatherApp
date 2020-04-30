import React, { Component } from "react";
import { View, Text, FlatList, Button} from "react-native";
import { ListItem, SearchBar,List } from "react-native-elements";
import file  from '../assets/cityVN.json';
import { TouchableOpacity } from "react-native-gesture-handler";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as weatherActions from '../actions';
import { Actions } from 'react-native-router-flux';

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
      return <SearchBar placeholder="Search Here..."
          lightTheme round editable={true}
          value={this.state.search}
          onChangeText={this.updateSearch} />;
  };

  updateSearch = search => {
        this.setState({ search }, () => {
            if (search.length < 2) {
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
          <Text>Loadding {this.state.search}...</Text>
          {/* <Button onPress={
            () => {
              this.getData();
            }
          } title="Reload" /> */}
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