import { Text, View } from "react-native";
import { useContext } from "react";

import { Button } from "../../components/ui/Button";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";

import { ThemeContext } from "../../context/ThemeContext";



export const ChangeThemeScreen = () => {

    const {setTheme, currentTheme, colors} = useContext(ThemeContext);


  return (
    <CustomView >
      <Title text={`Cambiar thema: ${currentTheme}`} safe/>

      <Button
        text="light"
        onPress={()=>setTheme('light')}
      />

      <View style={{height:10}}/>

      <Button
        text="dark"
        onPress={()=>setTheme('dark')}
      />

      <View style={{height:10}}/>

      <Text style={{color: colors.text}}>
        {JSON.stringify(colors, null, 2)}
      </Text>

    </CustomView>
  )
}
