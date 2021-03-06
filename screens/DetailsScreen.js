import React from 'react';
import {View, Text, StyleSheet, Share, FlatList, Button} from 'react-native';
import {Card, TextInput} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {bindActionCreators} from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import * as mainActions from '../actions/mainActions';
import axios from 'axios';

// import {fetchUsers} from '../utils/fetchUsers';

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  // componentDidMount() {
  //   fetchUsers();
  // }

  handleChange = (event = {}) => {
    // console.log(event.nativeEvent.text)
    this.setState({
      input: event.nativeEvent.text,
    });
  };

  addComment = () => {
    // console.log(this.state.input);
    this.props.addComment(this.state.input);
    this.setState({
      input: '',
    });
  };

  render() {
    // console.log('details')
    // console.log(this.props);
    const {userInfo, comments, users, error} = this.props;
    // console.log(users)
    const shareOptions = {
      title: 'User Details',
      message: `Hi i am ${userInfo.name} working as ${userInfo.prof} and having work experience of ${userInfo.workex}`,
    };
    const shareData = () => Share.share(shareOptions);
    // console.log(comments);

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
        }}>
        <Card style={{flex: 3}}>
          <Card.Title title="User Details" />
          <Card.Content>
            <Text>Name: {userInfo.name}</Text>
            <Text>Address: {userInfo.addr}</Text>
            <Text>Location: {userInfo.loc}</Text>
            <Text>Profession: {userInfo.prof}</Text>
            <Text>Work Experience: {userInfo.workex}</Text>
          </Card.Content>
        </Card>
        <Card style={{flex: 1}}>
          <TouchableOpacity onPress={shareData}>
            <Text style={styles.btnText}>Share</Text>
          </TouchableOpacity>
        </Card>
        <Card style={{flex: 5}}>
          <Card.Title title="Data Container" />
          <Card.Content>
            <FlatList
              data={comments}
              renderItem={({item}) => <Text>{item}</Text>}
            />
          </Card.Content>
        </Card>
        <Card style={{flex: 2, flexDirection: 'row', alignItems: 'flex-end'}}>
          <TextInput
            placeholder="Add Comment..."
            style={styles.input}
            value={this.state.input}
            onChange={this.handleChange}
          />
          <TouchableOpacity>
            <Button title="Add" onPress={this.addComment} />
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
  console.log('Redux state', state);
  return {
    userInfo: state.userInfo,
    comments: state.comments,
    error: state.error,
    users: state.users,
  };
}

function fetchUsers() {
  return dispatch =>
    fetch('https://reqres.in/api/users/2')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(mainActions.fetchUsersSuccess(res.data));
        console.log('Results', res.data);
        return res.data;
      })
      .catch(error => {
        dispatch(mainActions.fetchUsersError(error));
      });
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: comment => {
      dispatch(mainActions.addComment(comment));
    },
    fetchUsers: dispatch(fetchUsers()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);
