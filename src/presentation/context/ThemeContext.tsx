import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { darkColors, lightColors, ThemeColors } from "../../config/theme/theme";
import { Appearance, AppState, useColorScheme } from 'react-native';



type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
    currentTheme: ThemeColor;
    colors: ThemeColors;
    isDark: boolean;

    setTheme: (theme: ThemeColor)=>void;
}




export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}:PropsWithChildren) => {

    const colorScheme = useColorScheme();
    const [currentTheme, setcurrentTheme] = useState<ThemeColor>('light');


    useEffect(() => {
        if(colorScheme==='dark'){
            setcurrentTheme('dark');
        } else {
            setcurrentTheme('light');
        }
    }, [colorScheme]);

    // useEffect(() => {
    //     const subscription = AppState.addEventListener('change', nextAppState => {
    //         const colorScheme = Appearance.getColorScheme();
    //         setcurrentTheme(colorScheme==='dark' ? 'dark':'light');
    //     });

    //     return () => {
    //       subscription.remove();
    //     };
    //   }, []);


    const setTheme = (theme:ThemeColor)=> {
        setcurrentTheme(theme);
    }

    return (
        <ThemeContext.Provider value={{
            currentTheme: currentTheme,
            isDark: (currentTheme!=='light'),
            colors: (currentTheme==='light' ? lightColors : darkColors),
            setTheme: setTheme,
        }}>
            { children }
        </ThemeContext.Provider>
    )
}
