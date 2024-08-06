import 'react-native-gesture-handler';

import { PropsWithChildren, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Navigator } from './presentation/navigator/Navigator';
import { ThemeContext, ThemeProvider } from './presentation/context/ThemeContext';

import { CustomDarkTheme, CustomDefaultTheme } from './config/theme/NavigationTheme';




const AppNavigation = ({children}:PropsWithChildren) => {

  const { isDark } =useContext(ThemeContext);

  return (
    <NavigationContainer theme={isDark ? CustomDarkTheme:CustomDefaultTheme}>
      {children}
    </NavigationContainer>
  );
}


const AppTheme = ({children}: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <AppNavigation>{children}</AppNavigation>
    </ThemeProvider>
  );
}


export const ComponentsApp = () => {
  return (
    <AppTheme>
      <Navigator />
    </AppTheme>
  );
}
