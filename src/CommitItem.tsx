import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export interface Props {
  data: any;
}

const CommitItem: React.FunctionComponent<Props> = ({data}) => {
  const parseGitMessage = (message: String) => {
    return message.split('\n')[0];
  };

  return (
    <View style={styles.container}>
      <View style={styles.commitMessageContainer}>
        <Text style={styles.commitMessageText}>
          {parseGitMessage(data.commit.message)}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.tinyLogo} source={{uri: data.author.avatar_url}} />
        <View>
          <Text>{data.commit.author.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text>DEC 22, 2020</Text>
            <Text>{data.sha}</Text>
          </View>
        </View>
      </View>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 16,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.16,
    elevation: 5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  commitMessageContainer: {},
  commitMessageText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  tinyLogo: {
    borderRadius: 26,
    width: 30,
    height: 30,
  },
});

export default CommitItem;
