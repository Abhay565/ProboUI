import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  responsiveFontSize as S,
  responsiveScreenWidth as W,
} from 'react-native-responsive-dimensions';

const TrendingNow = () => {
  const data = [
    { name: 'PUB V/s Bangloru', uri: require('../images/ipl.webp') },
    { name: 'cricket', uri: require('../images/cricket.jpg') },
    { name: 'cyrpto', uri: require('../images/cyrpto.jpeg') },
    { name: 'football', uri: require('../images/football.jpeg') },
    { name: 'stock', uri: require('../images/stock.jpg') },
    { name: 'KOL V/s MUMB', uri: require('../images/ipl.webp') },
    { name: 'news', uri: require('../images/news.png') },
    { name: 'chess', uri: require('../images/chess.png') },
    { name: 'youtube', uri: require('../images/youtube.png') },
  ];

  // Group data into pairs to create two rows per item in the horizontal scroll
  const groupedData = [];
  for (let i = 0; i < data.length; i += 2) {
    groupedData.push(data.slice(i, i + 2));
  }

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.trending}>Trending Now</Text>
      </View>
      <FlatList
        data={groupedData}
        horizontal
        renderItem={({ item }) => {
          return (
            <View style={styles.column}>
              {item.map((subItem, index) => (
                <View style={styles.card} key={index}>
                  <Image source={subItem.uri} style={styles.image} />
                  <Text style={styles.text}>{subItem.name}</Text>
                </View>
              ))}
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default TrendingNow;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    paddingHorizontal: W(4),
  },
  trending: {
    fontSize: S(2.5),
    fontWeight: '600',
    color: 'rgba(0,0,0,.7)',
  },
  column: {
    flexDirection: 'column', // Arrange items in a column
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    elevation: 1,
    flexDirection: 'row',
    marginHorizontal: W(2),
    marginVertical: W(1),
    paddingHorizontal: W(2),
    paddingVertical: W(1.4),
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  image: {
    height: W(10),
    width: W(10),
    resizeMode: 'contain',
  },
  text: {
    fontSize: S(2.2),
    color: '#808080',
  },
  contentContainer: {
    paddingVertical: W(0),
  },
});
