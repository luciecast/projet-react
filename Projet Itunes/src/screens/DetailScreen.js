import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addFavorite } from "../store/favoritesSlice";

export default function DetailScreen({ route }) {
  const { track } = route.params;
  const dispatch = useDispatch();

  const addToFavorites = () => {
    dispatch(addFavorite({ ...track, rating: 0 }));
  };

 return (
  // on affiche les détails de la musique sélectionnée et un bouton pour l'ajouter aux favoris
  <View style={styles.container}>
    <Image source={{ uri: track.artworkUrl100 }} style={styles.cover} />
    <Text style={styles.title}>{track.trackName}</Text>
    <Text style={styles.artist}>{track.artistName}</Text>
    <Text style={styles.album}>{track.collectionName}</Text>

    <View style={styles.buttonWrapper}>
      <Button title="Ajouter aux favoris" onPress={addToFavorites} color="#1a6a26" />
    </View>
  </View>
);


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efcdf66d",
    padding: 20
  },
  cover: {
    width: 180,
    height: 180,
    borderRadius: 16,
    alignSelf: "center",
    marginBottom: 20
  },
  title: {
    color: "#4b6744",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 4
  },
  artist: {
    color: "#08280f",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 2
  },
  album: {
    color: "#08280f",
    fontSize: 13,
    textAlign: "center",
    marginBottom: 20
  },
  buttonWrapper: {
    marginTop: 10
  }
});

