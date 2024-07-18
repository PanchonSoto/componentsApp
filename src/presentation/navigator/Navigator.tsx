import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/Home/HomeScreen';
import { Animations } from '../screens/animations/Animations';
import { Inputs } from '../screens/inputs/Inputs';
import { Switches } from '../screens/switches/Switches';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animations" component={Animations} />
      <Stack.Screen name="Inputs" component={Inputs} />
      <Stack.Screen name="Switches" component={Switches} />
    </Stack.Navigator>
  );
}
