import React from 'react';
import {NetInfo} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Icon from "react-native-vector-icons/MaterialIcons";
import HomeScreen from './components/HomeScreen';
import SettingScreen from './components/SettingScreen';
import DetailsScreen from './components/DetailsScreen';

const CheckConnectivity = () => {
  NetInfo.isConnected.fetch().then(isConnected => {
    if (isConnected) {
      return true;
    } else {
      return false;
    }
  });
};

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

const getTabBarIcon = (navigation, focused, tintColor) => {
  const routeName = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName == 'Home') {
    iconName = `home${focused ? '' : '-outline'}`;
  } else if (routeName === 'Settings') {
    iconName = `cog${focused ? '' : '-outline'}`;
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const TabNav = createMaterialBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        getTabBarIcon(navigation, focused, tintColor);
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

const AppContainer = createAppContainer(TabNav);

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
