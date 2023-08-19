import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

type FeedScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const Feed: React.FC<FeedScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Feed Page</Text>
      <Pressable onPress={() => navigation.navigate('profile')}>
        <Text style={{fontSize: 18}}>Naviagte to Profile {'>'}</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('home')}>
        <Text style={{fontSize: 18}}>Naviagte to Home {'>'}</Text>
      </Pressable>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  header: {
    fontSize: 50,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
