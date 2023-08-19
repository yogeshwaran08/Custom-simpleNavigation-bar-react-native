import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Home from './Home'; // Import your screen components
import Profile from './Profile';

const BottomNavigationBar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderScreen = () => {
    if (activeTab === 'home') {
      return <Home />;
    } else if (activeTab === 'profile') {
      return <Profile />;
    }
    return null;
  };

  return (
    <View style={{flex: 1}}>
      {renderScreen()}
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setActiveTab('home')}>
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('profile')}>
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    height: 80,
    borderColor: 'white',
  },
  text: {
    color: 'white',
  },
});
export default BottomNavigationBar;
