import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils/themes';
import {mainMenuListTop, mainMenuListBottom} from './settings';

const MainMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {mainMenuListTop.map((menu, index) => (
          <View style={styles.item} key={index}>
            <menu.icon width={42} height={42} />
            <Text>{menu.label}</Text>
          </View>
        ))}
      </View>
      {/* <View style={styles.row}>
        {mainMenuListBottom.map((menu, index) => (
          <View style={styles.item} key={index}>
            <menu.link width={42} height={42} />
            <Text>{menu.label}</Text>
          </View>
        ))}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    borderColor: colors.gray,
    paddingBottom: 25,
    borderWidth: 0.5,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  item: {
    flex: 1,
    borderColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainMenu;
