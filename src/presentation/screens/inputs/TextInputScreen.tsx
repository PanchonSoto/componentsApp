import { useContext, useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';

import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Card } from '../../components/ui/Card';

import { globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';


export const TextInputScreen = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const {colors, isDark} = useContext(ThemeContext);

  return (
    <ScrollView>
      <CustomView margin>
        <Title text="Text Inputs" safe/>

        <Card >
          <TextInput
           style={[
            {color: colors.text, borderColor: isDark ? colors.liteColor : 'rgba(0,0,0,0.3)'},
            globalStyles.input
          ]}
           placeholderTextColor={colors.liteColor}
          //  underlineColorAndroid={'green'}
           placeholder='Nombre completo'
           autoCapitalize={'words'}
           autoCorrect={false}
           onChangeText={value=>setForm({...form, name: value})}
          />

          <TextInput
           style={[
            {color: colors.text, borderColor: isDark ? colors.liteColor : 'rgba(0,0,0,0.3)'},
            globalStyles.input
           ]}
           placeholderTextColor={colors.liteColor}
           placeholder='Correo electronico'
           autoCorrect={false}
           keyboardType='email-address'
           onChangeText={value=>setForm({...form, name: value})}
          />

          <TextInput
           style={[
            {color: colors.text, borderColor: isDark ? colors.liteColor : 'rgba(0,0,0,0.3)'},
            globalStyles.input
           ]}
           placeholderTextColor={colors.liteColor}
           placeholder='Telefono'
           keyboardType='phone-pad'
           onChangeText={value=>setForm({...form, name: value})}
          />
        </Card>

        <View style={{height:10}}/>

        <Card>
          <Text style={{color: isDark ? colors.liteColor : colors.text}}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{color: isDark ? colors.liteColor : colors.text}}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{color: isDark ? colors.liteColor : colors.text}}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{color: isDark ? colors.liteColor : colors.text}}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{color: isDark ? colors.liteColor : colors.text}}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{color: isDark ? colors.liteColor : colors.text}}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{color: isDark ? colors.liteColor : colors.text}}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{color: isDark ? colors.liteColor : colors.text}}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{color: isDark ? colors.liteColor : colors.text}}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{color: isDark ? colors.liteColor : colors.text}}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{color: isDark ? colors.liteColor : colors.text}}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{color: isDark ? colors.liteColor : colors.text}}>{JSON.stringify(form, null, 2)}</Text>
        </Card>
        <View style={{height:10}}/>
        <Card>
          <TextInput
            style={[
              {color: colors.text, borderColor: isDark ? colors.liteColor : 'rgba(0,0,0,0.3)'},
              globalStyles.input
            ]}
            placeholderTextColor={colors.liteColor}
            placeholder='Telefono'
            keyboardType='phone-pad'
            onChangeText={value=>setForm({...form, name: value})}
          />
        </Card>
      </CustomView>
      <View style={{height:20}}/>
    </ScrollView>
  );
}

