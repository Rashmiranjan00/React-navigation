import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Icon from "react-native-vector-icons/MaterialIcons";
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen'
import DetailsScreen from '../screens/DetailsScreen'

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

const MainScreenComponent = createAppContainer(TabNav);

class MainScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <MainScreenComponent/>
  }
}

export default MainScreen;