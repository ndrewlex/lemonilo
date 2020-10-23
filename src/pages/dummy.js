import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const DummyPage = ({route = {}}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{route.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DummyPage;
