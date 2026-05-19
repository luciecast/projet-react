import React from "react";
import { View, Text, Button, FlatList, StyleSheet} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { rateTrack } from "../store/favoritesSlice";

export default function FavoritesScreen() {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  return (
    // on affiche la liste des musiques favorites avec leur note et un bouton pour augmenter la note
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.trackId.toString()}
        renderItem={({ item }) => (
         <View style={styles.item}>
  <Text style={styles.title}>{item.trackName}</Text>
  <Text style={styles.artist}>{item.artistName}</Text>
  <Text style={styles.rating}>Note : {item.rating}/5</Text>

  <View style={styles.buttonWrapper}>
    <Button
      title="+1 rating"
      color="#1c5c34"
      onPress={() =>
        dispatch(
          rateTrack({
            id: item.trackId,
            rating: Math.min(item.rating + 1, 5)
          })
        )
      }
    />
  </View>
</View>

        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#561862c5",
    padding: 20
  },
  item: {
    backgroundColor: "#8b409a5d",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(157, 43, 43, 0.06)"
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600"
  },
  artist: {
    color: "#ffffff",
    fontSize: 13,
    marginTop: 2
  },
  rating: {
    color: "#1a6a26",
    fontSize: 13,
    marginTop: 6
  },
  buttonWrapper: {
    marginTop: 8,
    alignSelf: "flex-start"
  }
});

