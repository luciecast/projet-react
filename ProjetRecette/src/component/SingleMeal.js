import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { addRecipes, removeRecipes, recipeSelector } from "./RecipeSlice";
import { useNavigation } from "@react-navigation/native";

export default function SingleMeal(props) {

  //on crée des props pour récupérer les données passées depuis MealList ou FavoriteList
  const recipe = props.Recipe;
  const category = props.category; // "list" ou "fav"
  const btnTitle = category === "fav" ? "Remove" : "Add";


  const dispatch = useDispatch();
  const navigation = useNavigation();
  const favorites = useSelector(recipeSelector);


  const handleButtonPress = () => {
    if(category === "fav") {
      dispatch(removeRecipes(props.recipeIndex));
    } else {
      dispatch(addRecipes(recipe));
    }

  /*
  if (category === "fav") {
    // Trouver l'index du plat dans les favoris
    const index = favorites.findIndex(item => item.idMeal === recipe.idMeal);

    if (index !== -1) {
      //dispatch permet d'envoyer une action au store Redux
      dispatch(removeRecipes(index));
    }
  } else {
    dispatch(addRecipes(recipe));
  }*/
};


  return (
    <View style={styles.container}>
      {/* Navigation vers la page détails */}
      <TouchableOpacity onPress={() => navigation.navigate("Details", { meal: recipe })}>
        <Image source={{ uri: recipe.strMealThumb }} style={styles.image} />
        <Text style={styles.title}>{recipe.strMeal}</Text>
      </TouchableOpacity>

      {/* Bouton Add / Remove */}
      <Button mode="contained" onPress={handleButtonPress}>
        {btnTitle}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
});
