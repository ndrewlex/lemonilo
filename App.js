import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import BottomBar from './src/components/bottom-bar';
import HomePage from './src/pages/home';
import DummyPage from './src/pages/dummy';
//icon
import HomeIcon from './src/assets/bottom-menu/home.svg';
import NotifIcon from './src/assets/bottom-menu/notifikasi.svg';
import LifeIcon from './src/assets/bottom-menu/life.svg';
import OrderIcon from './src/assets/bottom-menu/pesanan.svg';
import ProfileIcon from './src/assets/bottom-menu/profil-saya.svg';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <BottomBar {...props} />}
        initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: HomeIcon,
          }}
        />
        <Tab.Screen
          name="Notifikasi"
          component={DummyPage}
          options={{
            tabBarLabel: 'Notifikasi',
            tabBarIcon: NotifIcon,
          }}
        />
        <Tab.Screen
          name="Life"
          component={DummyPage}
          options={{
            tabBarLabel: 'Life',
            tabBarIcon: LifeIcon,
          }}
        />
        <Tab.Screen
          name="Pesanan"
          component={DummyPage}
          options={{
            tabBarLabel: 'Pesanan',
            tabBarIcon: OrderIcon,
          }}
        />
        <Tab.Screen
          name="Profil Saya"
          component={DummyPage}
          options={{
            tabBarLabel: 'Profil Saya',
            tabBarIcon: ProfileIcon,
          }}
        />
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
