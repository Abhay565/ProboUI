import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveFontSize as S,
  responsiveScreenWidth as W,
} from 'react-native-responsive-dimensions';

const Header = () => {
  return (
    <View style={styles.main}>
      <MaterialIcons
        name="person-outline"
        size={S(4.2)}
        color={'rgba(0,0,0,.7)'}
      />
      <MaterialIcons
        name="notifications-none"
        size={S(4.2)}
        color={'rgba(0,0,0,.7)'}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  main: {
    marginTop: W(2),
    flexDirection: 'row',
    paddingHorizontal: W(4),
    justifyContent: 'space-between',
  },
});
