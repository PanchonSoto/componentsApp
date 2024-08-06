import { Alert, View } from 'react-native';
import { useContext } from 'react';

import { globalStyles } from '../../../config/theme/theme';

import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Button } from '../../components/ui/Button';

import { onShowPrompt } from '../../../config/adapters/prompt.adapter';
import { ThemeContext } from '../../context/ThemeContext';


export const AlertScreen = () => {

  const {isDark} = useContext(ThemeContext);

  const createTwoButtonAlert = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive', //red button
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ], {
      userInterfaceStyle: isDark ? 'dark' : 'light'
    });
  }

  const createThreeButtonAlert = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ], {
      cancelable: true,
      onDismiss() {
        console.log('onDismiss');
      },
      userInterfaceStyle: isDark ? 'dark' : 'light'
    });
  }

  const showPrompt = () => {
    onShowPrompt({
      title: 'Custom Prompt',
      message: 'Custom message from alertScreen',
      callbackOrButtons: [
        {text: 'Exit', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Oki', onPress: password => console.log('OK Pressed, password: ' + password)},
      ],
      options: {
        type: 'plain-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'Custom input'
      }
    });
    //!dont work on android
    // Alert.prompt(
    //   'Confirm Account Removal',
    //   'Are you sure you want to remove your account? This action cannot be undone. Type "DELETE" to confirm:',
    //   [
    //     {
    //       text: 'Cancel',
    //       style: 'cancel',
    //     },
    //     {
    //       text: 'Remove',
    //       onPress: text => console.log(text)
    //     }
    //  ])
  }


  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alertas"/>
      <Button
       text="Alerta- 2 botones"
       onPress={createTwoButtonAlert}
      />
      <View style={{height:10}}/>
      <Button
       text="Alerta- 3 botones"
       onPress={createThreeButtonAlert}
      />
      <View style={{height:10}}/>
      <Button
       text="Prompt-Input"
       onPress={()=>showPrompt()}
      />
    </CustomView>
  )
}
