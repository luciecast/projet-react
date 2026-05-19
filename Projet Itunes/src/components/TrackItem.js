import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function TrackItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text style={styles.title}>{item.trackName}</Text>
      <Text style={styles.artist}>{item.artistName}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  item: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: "#8b409a5d",
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "rgba(188, 236, 194, 0.78)"
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
  }
});

