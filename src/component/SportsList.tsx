import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
    responsiveFontSize as S,
    responsiveScreenWidth as W,
  } from 'react-native-responsive-dimensions';

const data = [
  {
    name: 'cricket',
    uri: require('../images/cricket.jpg'),
  },
  {
    name: 'cyrpto',
    uri: require('../images/cyrpto.jpeg'),
  },
  {
    name: 'football',
    uri: require('../images/football.jpeg'),
  },
  {
    name: 'stock',
    uri: require('../images/stock.jpg'),
  },
  {
    name: 'news',
    uri: require('../images/news.png'),
  },
  {
    name: 'chess',
    uri: require('../images/chess.png'),
  },
  {
    name: 'youtube',
    uri: require('../images/youtube.png'),
  },
];

const SportsList = () => {
  return (
    <FlatList
      data={data}
      style={styles.flatlist}
      horizontal
      renderItem={({item, index}) => {
        return (
          <>
            <View style={styles.card}>
              <Image source={item.uri} style={styles.image} />
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </>
        );
      }}
    />
  );
};

export default SportsList;

const styles = StyleSheet.create({
    flatlist:{
  marginBottom: W(2),
    },
    card:{
  backgroundColor: '#fff',
  elevation: 2,
  marginHorizontal: W(2),
  marginVertical:W(1),
  paddingHorizontal: W(4),
  paddingVertical: W(2),
  borderRadius: W(1),
  alignItems: 'center'
    },
    image:{
height: W(10),
width: W(10)
    },
    text:{
        fontSize: S(2.2),
    color: "#808080"
    }
});
