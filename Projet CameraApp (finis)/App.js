import { Provider } from "react-redux";
import { store } from "./store/store";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/components/HomeScreen";
import Photos from "./src/components/Photos/Photos";
import PhotoDetails from "./src/components/Photos/PhotoDetails";
import Folders from "./src/components/Folders/Folders";
import FoldersDetails from "./src/components/Folders/FoldersDetails";
import CameraMockScreen from "./src/components/Camera/CameraMockScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Photos" component={Photos} />
          <Stack.Screen name="PhotoDetails" component={PhotoDetails} />
          <Stack.Screen name="Folders" component={Folders} />
          <Stack.Screen name="FoldersDetails" component={FoldersDetails} />
          <Stack.Screen name="Camera" component={CameraMockScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
