import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../utils/themes';
import HomeIcon from '../../assets/bottom-menu/home.svg';
import NotifIcon from '../../assets/bottom-menu/notifikasi.svg';
// import LifeIcon from '../../assets/bottom-menu/life.svg';
// import OrderIcon from '../../assets/bottom-menu/pesanan.svg';
// import ProfileIcon from '../../assets/bottom-menu/profil-saya.svg';

const getIcon = (label) => {
  switch (label) {
    case 'Home':
      return <HomeIcon />;
    case 'Notifikasi':
      return <NotifIcon />;
    default:
      return <HomeIcon />;
  }
};
const BottomBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        console.log({route});
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        // const {icon: SvgIcon, title, path} = item;
        return (
          // <View style={styles.menu} key={index}>
          //   {SvgIcon && <SvgIcon width={26} height={26} />}
          //   <Text style={styles.textMenu}>{title}</Text>
          // </View>
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <View style={styles.menu}>
              {getIcon(label)}
              <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
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
    fontSize: 2,
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
