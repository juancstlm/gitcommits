import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, FlatList, StatusBar} from 'react-native';
import CommitItem from './CommitItem';
import store from './redux/store';
import {fetchCommits} from './redux/actions';

declare const global: {HermesInternal: null | {}};

const GitCommits = ({commits}) => {
  useEffect(() => {
    store.dispatch(fetchCommits('juancstlm', 'portfolio'));
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <FlatList
        style={{marginTop: 40}}
        data={commits}
        renderItem={({item}) => <CommitItem data={item} />}
      />
      <SafeAreaView />
    </>
  );
};

export default connect((state) => ({
  commits: state.commits.commits,
}))(GitCommits);
