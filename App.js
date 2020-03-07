import React from 'react';
import {NetInfo} from 'react-native';
import MainScreen from './utils/MainScreen';
import {createStore} from 'redux';
import reducer from './reducers/userDetailsReducer';
import { connect } from 'react-redux';
import DetailsScreen from './screens/DetailsScreen'


const CheckConnectivity = () => {
  NetInfo.isConnected.fetch().then(isConnected => {
    if (isConnected) {
      return true;
    } else {
      return false;
    }
  });
};

const store = createStore(reducer);

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
      <MainScreen user={this.props.user} />
    );
  }
}

function mapStateToProps(state) {
  return {
    user: {
      name: state.name,
      addr: state.addr,
      loc: state.loc,
      prof: state.prof,
      workex: state.workex,
    }
  };
}

// export default DetailsScreen;
export default connect(mapStateToProps, null)(App);