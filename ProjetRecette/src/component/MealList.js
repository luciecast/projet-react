import { useEffect, useState } from "react";
import { FlatList, View, Button, StyleSheet } from "react-native";
import SingleMeal from "./SingleMeal";
import { useNavigation } from "@react-navigation/native";

export default function MealList() {
  const [meals, setMeals] = useState([]);
  const navigation = useNavigation();

  // Fonction pour récupérer un repas aléatoire
  const fetchRandomMeal = async () => {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await res.json();
    setMeals(data.meals);
  };

  // Chargement initial
  useEffect(() => {
    fetchRandomMeal();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Bouton random */}
      <Button title="Random" onPress={fetchRandomMeal} />

      {/* Liste des repas */}
      <FlatList
        data={meals}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <SingleMeal Recipe={item} category="list" />
        )}
      />

      {/* Bouton Favoris */}
      <View style={styles.favButtonContainer}>
        <Button
          title="Favoris"
          onPress={() => navigation.navigate("Favorites")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  favButtonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
