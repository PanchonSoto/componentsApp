import { Pressable, StyleProp, Text, ViewStyle } from "react-native";
import { useContext } from "react";

import { globalStyles } from "../../../config/theme/theme";
import { ThemeContext } from "../../context/ThemeContext";



interface Props {
    text: string;
    styles?: StyleProp<ViewStyle>;

    onPress: () => void;
}



export const Button = ({text, styles, onPress}:Props) => {

    const { colors } = useContext(ThemeContext);

    return (
        <Pressable
         onPress={onPress}
         style={({pressed})=>([
            styles,
            globalStyles.btnPrimary,
            { opacity: pressed ? 0.8 : 1, backgroundColor: colors.primary }
         ])}
        >
            <Text style={[
                globalStyles.btnPrimaryText,
                { color: colors.buttonTextColor }
            ]}>
                { text }
            </Text>
        </Pressable>
    )
}
