import { useSelector } from "react-redux";
import { Image, TouchableOpacity, FlatList, StyleSheet, View } from "react-native";

export default function Photos({ navigation }) {
  const photos = useSelector((state) => state.photos.photos);

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PhotoDetails", { photo: item })
            }
          >
            <Image
              source={
                typeof item.uri === "string"
                  ? { uri: item.uri }
                  : item.uri
              }
              style={styles.photo}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    paddingTop: 10,
  },

  grid: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },

  photo: {
    width: 110,
    height: 110,
    margin: 6,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.6)",
    borderWidth: 1,
      borderColor: "rgba(221, 0, 255, 0.25)",
    shadowColor: "#9b5ea3",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
});
