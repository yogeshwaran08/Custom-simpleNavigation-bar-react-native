import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

type ProfileScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile Page</Text>
      {/* <Pressable onPress={() => navigation.navigate('feed')}>
        <Text style={{fontSize: 18}}>Naviagte to Feed {'>'}</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('home')}>
        <Text style={{fontSize: 18}}>Naviagte to Home {'>'}</Text>
      </Pressable> */}
    </View>
  );
};

export default Profile;

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
