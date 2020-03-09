import React from 'react';
import {NetInfo} from 'react-native';
import MainScreen from './utils/MainScreen';
import {createStore} from 'redux';


const CheckConnectivity = () => {
  NetInfo.isConnected.fetch().then(isConnected => {
    if (isConnected) {
      return true;
    } else {
      return false;
    }
  });
};


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // this.props.navigation.navigate('DetailsScreen', { this.props.user })
    // if (CheckConnectivity) {
    //   return (<AppContainer />);
    // } else {
    //   return (Alert.alert("You are offline"));
    // }
    return (
      <MainScreen />
    );
  }
}

export default App;