import { useRef } from "react";
import { Animated, Easing } from "react-native";



export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({ duration=300, toValue=1, callback=()=>{} }) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(()=>callback);
  }
  const fadeOut = ({ duration=300, toValue=0, callback=()=>{} }) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
  }

  const startMovingTop = ({
    initialPosition = 0,
    toValue=0,
    duration = 300,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    animatedTop.setValue(initialPosition);
    Animated.timing(animatedTop, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
      easing: easing,

    }).start(callback);
  };

  const bounceIn = () => {
    Animated.timing(animatedTop, {
      toValue: 100,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.elastic(1),
    }).start(()=>console.log('bounce'));
  }

  const bounceOut = () => {
    Animated.timing(animatedTop, {
      toValue: -100,
      duration: 300,
      useNativeDriver: true,
    }).start(()=>console.log('bounce'));
  }

  return {
    //props
    animatedOpacity,
    animatedTop,
    //methods
    fadeIn,
    fadeOut,
    startMovingTop,
  }
}
