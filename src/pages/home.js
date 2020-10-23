import React, {useState} from 'react';
import {
  ScrollView,
  Image,
  View,
  Modal,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Carousel from './../components/carousel';
import Topbar from './../components/top-bar';
import {slideStyles} from './../components/carousel/slide';
import imageBanner from './../assets/banner/banner.png';
import MainMenu from '../components/main-menu';
import ProdukPilihan from '../components/produk-pilihan';
import TopBar from './../components/top-bar';

const HomePage = () => {
  const [isSearched, setIsSearched] = useState(false);
  const onSearch = (status) => {
    setIsSearched(status);
  };

  const onCloseSearch = () => {
    setIsSearched(false);
  };

  return (
    <ScrollView>
      <Topbar onSearch={onSearch} isSearched={isSearched} />
      <ModalSearch isVisible={isSearched} onClose={onCloseSearch} />
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
      <ProdukPilihan />
    </ScrollView>
  );
};

const SearchData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const ModalSearch = ({isVisible = true, onClose}) => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{backgroundColor}}
      />
    );
  };

  return (
    <Modal visible={isVisible} animationType="none" onRequestClose={onClose}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.topbar}>
            <TopBar isSearched={true} />
          </View>
          <FlatList
            data={SearchData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
        </SafeAreaView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  topbar: {
    height: 65,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
  },
  centeredView: {
    backgroundColor: 'black',
    flex: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default HomePage;
