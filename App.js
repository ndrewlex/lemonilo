import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import BottomBar from './src/components/bottom-bar';
import HomePage from './src/pages/home';
import DummyPage from './src/pages/dummy';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <BottomBar {...props} />}>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Notifikasi" component={DummyPage} />
        <Tab.Screen name="Life" component={DummyPage} />
        <Tab.Screen name="Pesanan" component={DummyPage} />
        <Tab.Screen name="Profil Saya" component={DummyPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  black: {
    backgroundColor: '#ccc',
    flex: 1,
  },
});

export default App;
