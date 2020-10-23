import React from 'react';
import {ScrollView, Image} from 'react-native';
import Carousel from './../components/carousel';
import Topbar from './../components/top-bar';
import {slideStyles} from './../components/carousel/slide';
import imageBanner from './../assets/banner/banner.png';
import MainMenu from '../components/main-menu';

const HomePage = () => {
  return (
    <ScrollView>
      <Topbar />
      <Carousel
        items={[
          {
            image: <Image style={slideStyles.slideImg} source={imageBanner} />,
          },
          {
            image: <Image style={slideStyles.slideImg} source={imageBanner} />,
          },
          {
            image: <Image style={slideStyles.slideImg} source={imageBanner} />,
          },
        ]}
      />
      <MainMenu />
    </ScrollView>
  );
};

export default HomePage;
