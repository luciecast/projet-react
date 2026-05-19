import React, { useState } from "react";
import { View, TextInput, Button, FlatList, StyleSheet } from "react-native";
import TrackItem from "../components/TrackItem";
import { searchItunes } from "../api/itunes";

export default function SearchScreen({ navigation }) {
  // on utilise un state pour stocker la requete de recherche et les résultats
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const data = await searchItunes(query);
    setResults(data);
  };

  return (
    // on affiche un input pour la recherche, un bouton pour lancer la recherche et un bouton pour accéder aux favoris
    <View style={styles.container}>
      <TextInput
        placeholder="Artiste ou track"
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />

      <View style={styles.buttonsRow}>
        <Button title="Rechercher" onPress={handleSearch} />
        <View style={styles.buttonSpacer} />
        <Button title="Mes favoris" onPress={() => navigation.navigate("Favoris")} />
      </View>

      <FlatList
        data={results}
        keyExtractor={(item) => item.trackId.toString()}
        renderItem={({ item }) => (
          <TrackItem
            item={item}
            onPress={() => navigation.navigate("Détail", { track: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efcdf66d",
    paddingHorizontal: 16,
    paddingTop: 20
  },
  input: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    color: "#000000",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(127, 180, 128, 0.64)"
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12
  },
  buttonSpacer: {
    width: 8
  },
  list: {
    marginTop: 8
  }
});
