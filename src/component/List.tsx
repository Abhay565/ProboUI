import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  responsiveFontSize as S,
  responsiveScreenWidth as W,
  responsiveScreenHeight as H,
} from 'react-native-responsive-dimensions';

const List = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const [modalVisible, setModalVisible] = useState(false);
  const [toggleButton, setToggleButton] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const x = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onStart((e, c) => {
      c.startX = x.value;
    })
    .onUpdate((e, c) => {
      x.value = c.startX + e.translationX;
    })
    .onEnd(() => {
      x.value = withTiming(0, {duration: 800});
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}],
    };
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <View style={styles.card} key={index}>
            <View style={styles.row}>
              <View>
                <Text style={styles.match}>
                  Kolkata to win match v/s Mumbai?
                </Text>
                <Text style={styles.ratio}>
                  H2H last 5 T20: Kolkata 4, Mumbai 1, draw 0
                </Text>
              </View>
              <Image
                source={require('../images/ipl.webp')}
                style={styles.ipl}
              />
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.yesConatainer}
                onPress={() => {
                  toggleModal();
                  setToggleButton(false);
                }}>
                <Text style={styles.yesText}>Yes 5.3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.noConatainer}
                onPress={() => {
                  toggleModal();
                  setToggleButton(true);
                }}>
                <Text style={styles.noText}>No 4.7</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleModal}>
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={() => toggleModal()}>
          <TouchableOpacity
            style={styles.modalContent}
            activeOpacity={1}
            onPress={() => setModalVisible(true)}>
            <View style={styles.row}>
              <Text style={styles.match}>Kolkata to win match v/s Mumbai?</Text>
              <Image
                source={require('../images/ipl.webp')}
                style={styles.ipl}
              />
            </View>
            <View style={styles.toggle}>
              <TouchableOpacity
                style={!toggleButton ? styles.yesToggle : styles.plain}
                onPress={() => setToggleButton(false)}>
                <Text
                  style={
                    toggleButton
                      ? styles.yesText
                      : [styles.yesText, {color: '#fff'}]
                  }>
                  Yes 5.3
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={toggleButton ? styles.notoggle : styles.plain}
                onPress={() => setToggleButton(true)}>
                <Text
                  style={
                    !toggleButton
                      ? styles.noText
                      : [styles.yesText, {color: '#fff'}]
                  }>
                  No 4.7
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.card2}>
              <View style={[styles.row, {justifyContent: 'space-between'}]}>
                <Text style={styles.text}>Price</Text>
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.price}>
                    {!toggleButton ? '5.3' : '4.7'}
                  </Text>
                  <Text style={styles.qty}>1345676 qty available</Text>
                </View>
              </View>
              <View style={styles.dotted} />
              <View style={[styles.row, {justifyContent: 'space-between'}]}>
                <Text style={styles.text}>{!toggleButton ? '5.3' : '4.7'}</Text>
                <Text style={[styles.text, {color: 'green'}]}>10</Text>
              </View>
              <View
                style={[
                  styles.row,
                  {justifyContent: 'space-between', marginTop: 0},
                ]}>
                <Text style={styles.qty}>you put</Text>
                <Text style={styles.qty}>you get</Text>
              </View>
            </View>

            <GestureDetector gesture={gesture}>
              <View
                style={
                  toggleButton
                    ? [
                        styles.swipeContainer,
                        {backgroundColor: 'rgba(200,0,0,0.8)'},
                      ]
                    : [
                        styles.swipeContainer,
                        {backgroundColor: 'rgba(0,50,200,0.8)'},
                      ]
                }>
                <Animated.View style={[styles.circle, animatedStyle]} />
                <Text style={styles.swipeText}>{'Swipe to right'}</Text>
              </View>
            </GestureDetector>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </GestureHandlerRootView>
  );
};

export default List;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    elevation: 1,
    marginHorizontal: W(3),
    marginVertical: W(1.4),
    paddingVertical: W(2),
    paddingHorizontal: W(2),
    borderRadius: W(2),
  },
  ipl: {
    height: W(15),
    width: W(10),
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: 6,
    marginVertical: W(2),
  },
  match: {
    fontSize: S(2.4),
    fontWeight: '500',
    color: 'rgba(0,0,0,0.7)',
  },
  ratio: {
    fontSize: S(1.7),
    fontWeight: '500',
    color: 'rgba(0,0,0,0.52)',
  },
  yesConatainer: {
    backgroundColor: 'rgba(0,80,150,0.1)',
    paddingHorizontal: W(14),
    paddingVertical: W(3),
    borderRadius: W(1),
  },
  noConatainer: {
    backgroundColor: 'rgba(230,0,0,0.12)',
    paddingHorizontal: W(14),
    paddingVertical: W(3),
    borderRadius: W(1),
  },
  yesText: {
    color: 'rgba(0,0,200,.8)',
    fontSize: S(2.2),
    fontWeight: '700',
  },
  noText: {
    color: 'rgba(255,9,0,.9)',
    fontSize: S(2.2),
    fontWeight: '700',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    height: H(50),
    padding: W(4),
    backgroundColor: '#fff',
    borderTopEndRadius: W(5),
    borderTopStartRadius: W(5),
  },
  toggle: {
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: W(10),
    flexDirection: 'row',
  },
  yesToggle: {
    backgroundColor: 'rgba(0,50,200,0.8)',
    width: W(46),
    borderRadius: W(10),
    paddingVertical: W(3),
    alignItems: 'center',
  },
  notoggle: {
    backgroundColor: 'rgba(200,0,0,0.8)',
    width: W(46),
    borderRadius: W(10),
    paddingVertical: W(3),
    alignItems: 'center',
  },
  plain: {
    width: W(46),
    borderRadius: W(10),
    paddingVertical: W(3),
    alignItems: 'center',
  },
  card2: {
    marginVertical: W(5),
    backgroundColor: '#fff',
    elevation: 2,
    paddingHorizontal: W(4),
    borderRadius: W(2),
  },
  text: {
    fontSize: S(2.2),
    fontWeight: '500',
    color: '#808080',
  },
  qty: {
    fontSize: S(1.8),
    fontWeight: '500',
    color: '#808080',
  },
  price: {
    fontSize: S(2.6),
    fontWeight: '700',
    color: 'rgba(0,0,0,.8)',
  },
  dotted: {
    borderWidth: 0.6,
    borderColor: '#808080',
    borderStyle: 'dotted',
    width: '100%',
    marginVertical: W(2),
  },
  swipeContainer: {
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: W(10),
    paddingVertical: W(4.8),
    paddingHorizontal: W(4),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  circle: {
    width: W(10),
    height: W(10),
    borderRadius: W(5),
    backgroundColor: 'rgba(255,255,255,0.9)',
    position: "absolute",
    left: W(2),
  },
  swipeText: {
    color: '#fff',
    fontSize: S(2.2),
  },
});
