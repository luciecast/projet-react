import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealList from "./MealList";
import FavoriteList from "./FavoriteList";
import MealDetails from "./MealsDetails";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Meals" component={MealList} />
      <Stack.Screen name="Favorites" component={FavoriteList} />
      <Stack.Screen name="Details" component={MealDetails} />
    </Stack.Navigator>
  );
}
