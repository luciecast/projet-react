import { useSelector, useDispatch } from "react-redux";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { addFolder } from "./FolderSlice";

export default function Folders({ navigation }) {
  const folders = useSelector(state => state.folders.folders);
  const dispatch = useDispatch();
  const [newFolder, setNewFolder] = useState("");

  return (
    <View style={styles.container}>

      {/*affiche les dossiers */}
      {folders.map((f, index) => (
        <TouchableOpacity
          key={index}
          style={styles.folderItem}
          onPress={() =>
            navigation.navigate("FoldersDetails", { folderName: f.name })
          }
        >
          <Text style={styles.folderText}>{f.name}</Text>
        </TouchableOpacity>
      ))}

      {/* input pour ajouter un nouveau dossier */}
      <TextInput
        placeholder="Nom du dossier"
        placeholderTextColor="rgba(255,255,255,0.4)"
        value={newFolder}
        onChangeText={setNewFolder}
        style={styles.input}
      />

      {/* bouton pour ajouter */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          if (newFolder.trim() !== "") {
            dispatch(addFolder(newFolder));
            setNewFolder("");
          }
        }}
      >
        <Text style={styles.addButtonText}>Ajouter un dossier</Text>
      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  folderItem: {
    paddingVertical: 16,
    paddingHorizontal: 14,
    marginBottom: 12,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(221, 0, 255, 0.25)",
    shadowColor: "#9b5ea3",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 3,
  },

  folderText: {
    color: "#1C1C1E",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
  },

  input: {
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 14,
    padding: 14,
    color: "#45458d",
    marginTop: 25,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "rgba(221, 0, 255, 0.25)",
    shadowColor: "#9b5ea3",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  addButton: {
    backgroundColor: "#9b5ea3",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 5,
    shadowColor: "#9b5ea3",
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },

  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});
