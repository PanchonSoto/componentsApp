import { View, Text, StyleSheet, Pressable, Animated, Easing } from 'react-native';
import { colors } from '../../../config/theme/theme';
import { useRef } from 'react';


export const Animation101Screen = () => {

  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(()=>console.log('fadeIn ended'));
  }
  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(()=>{
      animatedTop.resetAnimation();
      console.log('fadeOut ended');
    });
  }

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

  return (
    <View style={styles.container}>

      <Animated.View style={[
        styles.purpleBox,
        {
          opacity: animatedOpacity,
          transform: [{
            translateY: animatedTop
          }],
        }
        ]}
      />

      <Pressable onPress={fadeIn} style={{marginTop:10}}>
        <Text>FadeIn</Text>
      </Pressable>
      <Pressable onPress={fadeOut} style={{marginTop:10}}>
        <Text>FadeOut</Text>
      </Pressable>

      <Pressable onPress={bounceIn} style={{marginTop:10}}>
        <Text>BounceIn</Text>
      </Pressable>
      <Pressable onPress={bounceOut} style={{marginTop:10}}>
        <Text>BounceOut</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  }
})
