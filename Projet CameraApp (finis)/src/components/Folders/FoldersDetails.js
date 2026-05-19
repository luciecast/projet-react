import { useSelector, useDispatch } from "react-redux";
import { View, Image, FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import { removeFolder } from "./FolderSlice";

export default function FoldersDetails({ route, navigation }) {
  const { folderName } = route.params;
  const dispatch = useDispatch();

  const photos = useSelector((state) =>
    state.photos.photos.filter((p) => p.folder === folderName)
  );

  return (
    <View style={styles.container}>

      {/* bouton pour supprimer le dossier */}
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => {
          dispatch(removeFolder(folderName));
          navigation.goBack();
        }}
      >
        <Text style={styles.deleteText}>Supprimer le dossier</Text>
      </TouchableOpacity>

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

  deleteButton: {
    backgroundColor: "#FF3B30",
    padding: 12,
    margin: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  deleteText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
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
