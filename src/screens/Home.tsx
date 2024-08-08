import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../component/Header';
import {
  responsiveFontSize as S,
  responsiveScreenWidth as W,
} from 'react-native-responsive-dimensions';
import SportsList from '../component/SportsList';
import TrendingNow from '../component/TrendingNow';
import List from '../component/List';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.main}>
      <Header />
      <Image source={require('../images/swimmer.jpg')} style={styles.image} />
      <SportsList />
      <TrendingNow />
      <List />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  image: {
    marginVertical: W(3),
    height: W(36),
    width: W(92),
    resizeMode: "cover",
    alignSelf: 'center',
    borderRadius: W(1),
  },
});
