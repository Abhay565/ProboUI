import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

const Search = () => {
 const x=useSharedValue(0);
 const y =useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (e,c)=>{
     c.startX = x.value; 
    c.startY = y.value;
    },
    onActive:(e,c)=>{
      x.value = c.startX + e.translationX;
      y.value = c.startY = e.translationY;
    },
    onEnd:(e,c)=>{
      x.value = withTiming(0,{duration:800});
      y.value = withTiming(0,{duration:800});
    }
  });

  const animatedsStyle = useAnimatedStyle(()=>{
    return{
      transform: [{translateX: x.value},{translateY: y.value}]
    }
  })

  return (
    <GestureHandlerRootView style={styles.main}>
      <View style={styles.conatiner}>
<PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.box,animatedsStyle]} />
      </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  )
}

export default Search

const styles = StyleSheet.create({
  main:{
    flex: 1,
   
      },
      conatiner:{
      flex: 1
      },
      box:{
        height: 100,
        width: 100,
        backgroundColor: "orange",
        borderRadius: 5
      }

})