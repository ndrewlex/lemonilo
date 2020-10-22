import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Link} from 'react-router-native';
import {colors} from '../../utils/themes';

const BottomBar = ({routes = []}) => {
  return (
    <View style={styles.container}>
      {routes.map((item, index) => {
        const {icon: SvgIcon, title, path} = item;
        return (
          <Link to={path} key={index}>
            <View style={styles.menu} key={index}>
              {SvgIcon && <SvgIcon width={26} height={26} />}
              <Text style={styles.textMenu}>{title}</Text>
            </View>
          </Link>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: 'row',
  },
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 5,
  },
  textMenu: {
    color: colors.gray,
  },
  imgMenu: {
    height: 26,
    width: 26,
  },
});

export default BottomBar;
