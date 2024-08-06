import { useContext } from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';

import { ThemeContext } from '../../context/ThemeContext';
import { useAnimation } from '../../hooks/useAnimation';
import { CustomView } from '../../components/ui/CustomView';
import { Button } from '../../components/ui/Button';


export const Animation101Screen = () => {

  const {colors} = useContext(ThemeContext);

  const {fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingTop } = useAnimation();




  return (
    <CustomView style={styles.container}>

      <Animated.View style={[
        styles.purpleBox,
        {
          backgroundColor: colors.primary,
          opacity: animatedOpacity,
          transform: [{
            translateY: animatedTop
          }],
        }
        ]}
      />

      <Button text='FadeIn' onPress={()=>{
        fadeIn({});
        startMovingTop({
          initialPosition:-100,
          easing: Easing.elastic(1),
          duration: 750
        })
       }} styles={{marginTop:10}} />

      <Button
       text='FadeOut'
       onPress={()=>fadeOut({})}
       styles={{marginTop:10}}
      />


      {/* <Pressable onPress={bounceIn} style={{marginTop:10}}>
        <Text>BounceIn</Text>
      </Pressable>
      <Pressable onPress={bounceOut} style={{marginTop:10}}>
        <Text>BounceOut</Text>
      </Pressable> */}
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  purpleBox: {
    // backgroundColor: colors.primary,
    width: 150,
    height: 150,
  }
})
