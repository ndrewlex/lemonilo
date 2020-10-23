import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import PilihanImage from '../../assets/pilihan-produk/pilihan-parfum.svg';

let data = Array.from({length: 5}).map(() => {
  return {
    title: 'Kecap Manis Lemonilo',
    netto: '135ml',
    price: 'Rp 14.000',
  };
});

const ProdukPilihan = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text>Produk Pilihan Lemonilo</Text>
        <Text>Lihat Semua</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        {data.map((item, index) => {
          return (
            <View style={styles.item} key={index}>
              <View style={styles.wrapperImage}>
                <PilihanImage width={100} height={100} />
              </View>
              <View style={styles.info} key={index}>
                <Text>{item.title}</Text>
                <Text>{item.netto}</Text>
                <Text>{item.price}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  item: {
    borderRadius: 3,
    marginHorizontal: 5,
    height: 200,
    width: 165,
    backgroundColor: '#ccc',
  },

  wrapperImage: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  image: {
    resizeMode: 'contain',
  },

  info: {
    backgroundColor: 'white',
    padding: 5,
  },
});

export default ProdukPilihan;
