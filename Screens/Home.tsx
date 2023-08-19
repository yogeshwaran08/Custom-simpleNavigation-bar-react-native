import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home Page</Text>
      {/* <Pressable onPress={() => navigation.navigate('profile')}>
        <Text style={{fontSize: 18}}>Naviagte to profile {'>'}</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('feed')}>
        <Text style={{fontSize: 18}}>Naviagte to Feed {'>'}</Text>
      </Pressable> */}
    </View>
  );
};

export default Home;

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
