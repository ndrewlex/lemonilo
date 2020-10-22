import React from 'react';
import {ScrollView} from 'react-native';
import Carousel from './../components/carousel';
import Topbar from './../components/top-bar';
const HomePage = () => {
  return (
    <ScrollView>
      <Topbar />
      <Carousel
        items={[
          {
            title: 'Welcome, swipe to continue.',
          },
          {
            title: 'About feature X.',
          },
          {
            title: 'About feature Y.',
          },
        ]}
      />
    </ScrollView>
  );
};

export default HomePage;
