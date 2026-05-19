import { Provider } from "react-redux";
import { store } from "./store/store";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/component/AppNavigation";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MealDetails from "./src/component/MealsDetails";
import FavoriteList from "./src/component/FavoriteList";
import MealList from "./src/component/MealList";

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Screen name="Meals" component={MealList} />
        <Tab.Screen name="Favorites" component={FavoriteList} />
        <Tab.Screen name="Details" component={MealDetails} />
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  );
}
