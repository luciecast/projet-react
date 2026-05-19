import { ScrollView, Image, Text, Button } from "react-native";
import SingleMeal from "./SingleMeal";

export default function MealDetails({ route }) {

  const meal = route.params.meal;

  // tableau pour stocker les ingrédients
  let ingredients = [];

  // l'API donne strIngredient1, strIngredient2, etc...
  for (let i = 1; i <= 20; i++) {
    let ingredient = meal["strIngredient" + i];

    if (ingredient && ingredient !== "") {
      ingredients.push(ingredient);
    }
  }

  return (
    <ScrollView>

      <Image
        source={{ uri: meal.strMealThumb }}
        style={{ width: "100%", height: 250 }}
      />

      <Text>{meal.strMeal}</Text>

      <Text>Ingrédients :</Text>

      {ingredients.map((item, index) => (
        <Text key={index}>- {item}</Text>
      ))}

      <Text>Instructions :</Text>
      <Text>{meal.strInstructions}</Text>

      
      <SingleMeal Recipe={meal} category="details" />

    </ScrollView>
  );
}
