import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  TextInput,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CommitItem from './CommitItem';
import store from './redux/store';
import {fetchCommits} from './redux/actions';

declare const global: {HermesInternal: null | {}};

const GitCommits = ({commits}) => {
  const [user, setUser] = useState('juancstlm');
  const [repository, setRepository] = useState('gitcommits');

  useEffect(() => {
    store.dispatch(fetchCommits(user, repository));
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{marginTop: 40}}>
        <TextInput value={user} onChangeText={(text) => setUser(text)} />
        <TextInput
          value={repository}
          onChangeText={(text) => setRepository(text)}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          store.dispatch(fetchCommits(user, repository));
        }}>
        <Text>Get</Text>
      </TouchableOpacity>
      <FlatList
        style={{marginTop: 40}}
        data={commits}
        keyExtractor={(item) => item.sha.toString()}
        renderItem={({item}) => <CommitItem data={item} />}
      />
      <SafeAreaView />
    </>
  );
};

export default connect((state) => ({
  commits: state.commits.commits,
}))(GitCommits);
