import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../../../config/theme/theme'


interface Props {
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
}


export const CustomView = ({children, style}:Props) => {
  return (
    <View style={[globalStyles.mainContainer,style]}>
      {children}
    </View>
  )
}

