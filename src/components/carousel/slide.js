import React from 'react';
import {View, StyleSheet} from 'react-native';
const Slide = (props) => {
  const {image} = props;
  return <View style={slideStyles.slide}>{image}</View>;
};

export const slideStyles = StyleSheet.create({
  slide: {
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#ccc',
    paddingBottom: 20,
    // paddingTop: 30,
    flexBasis: '100%',
    flex: 1,
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: 180,
  },
  slideImg: {
    width: '100%',
  },
});

export default Slide;
