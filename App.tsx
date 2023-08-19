/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from './Screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Profile from './Screens/Profile';
import Feed from './Screens/Feed';
import {View, StyleSheet} from 'react-native';
import BottomNavigationBar from './Screens/BottomNavigationBar';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="home" component={Home} />
    //     <Stack.Screen name="profile" component={Profile} />
    //     <Stack.Screen name="feed" component={Feed} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View style={styles.container}>
      <BottomNavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
