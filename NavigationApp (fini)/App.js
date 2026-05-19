import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/components/HomeScreen';
import InfoScreen from './src/components/InfoScreen';
import OtherScreen from './src/components/OtherScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu Principal" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Accueil" component={HomeScreen} />
        <Stack.Screen name="Information" component={InfoScreen} />
        <Stack.Screen name="Autre" component={OtherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
