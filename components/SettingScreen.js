import React from 'react';
import {View, Text, StyleSheet, BackHandler, Alert} from 'react-native';
import {Button} from 'react-native-paper';

class SettingScreen extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {screen: "Settings"};
  }

  componentDidMount() {
    // if(this.state.screen === "Settings"){
    //   BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    // }
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () => {} );
  }

  onBackPress = () => {
    Alert.alert(' Exit From App ', ' Do you want to exit From App ?', [
      {text: 'Yes', onPress: () => BackHandler.exitApp()},
      {text: 'Cancle', style: 'cancel'},
      {
        text: 'Navigate',
        onPress: () => {
          this.props.navigation.navigate('Home');
        },
      },
    ]);
    return true;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{flex: 1, fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
          Settings Screen
        </Text>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Button
            mode="contained"
            onPress={() => {
              BackHandler.exitApp();
            }}>
            Exit
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SettingScreen;
