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
        <Text
          style={styles.commitMessageText}
          numberOfLines={1}
          ellipsizeMode={'tail'}>
          {parseGitMessage(data.commit.message)}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.tinyLogo} source={{uri: data.author.avatar_url}} />
        <View style={styles.commitInfoContainer}>
          <Text>{data.commit.author.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text numberOfLines={1} ellipsizeMode={'tail'}>
              {data.sha}
            </Text>
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
  commitMessageContainer: {
    marginLeft: 10,
    marginBottom: 5,
  },
  commitMessageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  tinyLogo: {
    borderRadius: 26,
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  commitInfoContainer: {
    marginLeft: 10,
  },
});

export default CommitItem;
