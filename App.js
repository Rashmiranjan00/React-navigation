import React from 'react';
import {NetInfo} from 'react-native';
import AppContainer from './utils/AppContainer';

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
    // if (CheckConnectivity) {
    //   return (<AppContainer />);
    // } else {
    //   return (Alert.alert("You are offline"));
    // }
    return <AppContainer />;
  }
}

export default App;
