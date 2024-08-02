import { View, Text, StyleSheet, Pressable, Animated, Easing } from 'react-native';
import { colors } from '../../../config/theme/theme';
import { useAnimation } from '../../hooks/useAnimation';


export const Animation101Screen = () => {

  const {fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingTop } = useAnimation();

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

      <Pressable onPress={()=>{
        fadeIn({});
        startMovingTop({
          initialPosition:-100,
          easing: Easing.elastic(1),
          duration: 750
        })
       }} style={{marginTop:10}}>
        <Text>FadeIn</Text>
      </Pressable>
      <Pressable onPress={()=>fadeOut({})} style={{marginTop:10}}>
        <Text>FadeOut</Text>
      </Pressable>

      {/* <Pressable onPress={bounceIn} style={{marginTop:10}}>
        <Text>BounceIn</Text>
      </Pressable>
      <Pressable onPress={bounceOut} style={{marginTop:10}}>
        <Text>BounceOut</Text>
      </Pressable> */}
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
