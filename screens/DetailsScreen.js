import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, TextInput} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    // console.log('details')
    // console.log(this.props.user)
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'space-between',
        }}>
        <Card>
          <Card.Title title="User Details" />
          <Text>{this.props.name}</Text>
          <Text>{this.props.addr}</Text>
          <Text>{this.props.loc}</Text>
          <Text>{this.props.prof}</Text>
          <Text>{this.props.workex}</Text>
        </Card>
        <Card>
          <Text>options Container</Text>
        </Card>
        <Card>
          <Text>Data Container</Text>
        </Card>
        <Card>
          <TextInput placeholder="Add Comment..." style={styles.input} />
          <TouchableOpacity>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default DetailsScreen;