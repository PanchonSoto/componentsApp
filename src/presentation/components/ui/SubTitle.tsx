import { PropsWithChildren } from 'react';
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, globalStyles } from '../../../config/theme/theme';


interface Props extends PropsWithChildren{
  text: string;
  backgroundcolor: string;
  safe?: boolean;
}

export const SubTitle = ({backgroundcolor=colors.background, text, safe=false}:Props) => {

    const { top } = useSafeAreaInsets();

  return (
    <Text style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        marginBottom:10,
        backgroundColor: backgroundcolor,
    }}>
        { text }
    </Text>
  )
}
