import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { colors } from '../../../config/theme/theme';

interface Props {
    style?: StyleProp<ViewStyle>;
}



export const Separator = ({style}:Props) => {
  return (
    <View style={{backgroundColor: colors.cardBackground}}>
        <View style={[
        {
            alignSelf: 'center',
            width: '100%',
            height:1,
            backgroundColor: colors.text,
            opacity:0.1,
            marginVertical: 8,
        },
        style
        ]}>
            <Text>Separator</Text>
        </View>
    </View>
  )
}
