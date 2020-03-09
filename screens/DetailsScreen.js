import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, TextInput} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';

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
          <Card.Content>
            <Text>Name: {this.props.user.name}</Text>
            <Text>Address: {this.props.user.addr}</Text>
            <Text>Location: {this.props.user.loc}</Text>
            <Text>Profession: {this.props.user.prof}</Text>
            <Text>Work Experience: {this.props.user.workex}</Text>
          </Card.Content>
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

function mapStateToProps(state) {
  return {
    user: {
      name: state.name,
      addr: state.addr,
      loc: state.loc,
      prof: state.prof,
      workex: state.workex,
    },
  };
}

export default connect(mapStateToProps, null)(DetailsScreen);
