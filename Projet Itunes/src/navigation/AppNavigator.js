import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchScreen from "../screens/SearchScreen";
import DetailScreen from "../screens/DetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    // permet de naviguer entre les écrans de l'application
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Recherche" component={SearchScreen} />
        <Stack.Screen name="Détail" component={DetailScreen} />
        <Stack.Screen name="Favoris" component={FavoritesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
