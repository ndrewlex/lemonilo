import React from 'react';
import {NativeRouter, Route, Link} from 'react-router-native';
import BottomBar from './src/components/bottom-bar';
import {StyleSheet, View, Text} from 'react-native';
import routes from './src/utils/routes';

const App = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        {routes.map((route, index) => {
          const {path, exact} = route;
          return (
            <Route
              key={index}
              path={path}
              exact={exact}
              render={(props) => <route.component {...props} />}
            />
          );
        })}

        <BottomBar routes={routes} />
      </View>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
