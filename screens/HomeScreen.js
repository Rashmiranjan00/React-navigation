import React from 'react';
import {
  Alert,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

class HomeScreen extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{flex: 1, fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
          Welcome !!!
        </Text>
        <View
          style={{flex: 2, alignItems: 'center', justifyContent: 'flex-start'}}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate('Details')}>
            <Image
              source={{
                uri:
                  'https://i.ya-webdesign.com/images/businessman-png-icon-1.png',
              }}
              style={styles.img}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 15, marginTop: 10}}>
            Hello React Native User
          </Text>
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
  img: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
});

export default HomeScreen;
