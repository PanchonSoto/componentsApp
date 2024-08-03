import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../../../config/theme/theme'


interface Props {
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
    margin?: boolean;
}


export const CustomView = ({children, style, margin=false}:Props) => {
  return (
    <View style={[
      globalStyles.mainContainer, style,
      margin ? globalStyles.globalMargin : null,
    ]}>
      {children}
    </View>
  )
}

