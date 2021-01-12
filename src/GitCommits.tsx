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
      <View
        style={{
          marginTop: 40,
          marginHorizontal: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text>User:</Text>
          <TextInput
            autoCapitalize={'none'}
            value={user}
            onChangeText={(text) => setUser(text.trim())}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Repository:</Text>
          <TextInput
            autoCapitalize={'none'}
            value={repository}
            onChangeText={(text) => setRepository(text.trim())}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          width: 60,
          height: 40,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          store.dispatch(fetchCommits(user, repository));
        }}>
        <Text style={{fontSize: 20, color: 'white'}}>Get</Text>
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
