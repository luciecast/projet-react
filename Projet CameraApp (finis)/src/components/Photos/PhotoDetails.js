import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { assignPhotoToFolder, removePhoto } from "./PhotoSlice";
import { useState } from "react";

export default function PhotoDetails({ route, navigation }) {
  const { photo } = route.params;
  const folders = useSelector((state) => state.folders.folders);
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={typeof photo.uri === "string" ? { uri: photo.uri } : photo.uri}
        style={styles.photo}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setShowMenu(!showMenu)}
      >
        <Text style={styles.addButtonText}>Ajouter au dossier</Text>
      </TouchableOpacity>

      {/* bouton pour supprimer la photo */}
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => {
          dispatch(removePhoto(photo.id));
          navigation.goBack();
        }}
      >
        <Text style={styles.deleteText}>Supprimer la photo</Text>
      </TouchableOpacity>

      {showMenu && (
        <View style={styles.menu}>
          {folders.map((f) => (
            <TouchableOpacity
              key={f.name}
              style={styles.menuItem}
              onPress={() => {
                dispatch(
                  assignPhotoToFolder({
                    photoId: photo.id,
                    folderName: f.name,
                  })
                );
                setShowMenu(false);
              }}
            >
              <Text style={styles.menuText}>{f.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    alignItems: "center",
    paddingTop: 30,
  },

  photo: {
    width: 320,
    height: 320,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.6)",
    borderWidth: 1,
    borderColor: "rgba(0,122,255,0.25)",
    shadowColor: "#007AFF",
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },

  addButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 14,
    marginTop: 25,
    shadowColor: "#007AFF",
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },

  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  deleteButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 14,
    marginTop: 20,
    shadowColor: "#FF3B30",
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 4,
  },

  deleteText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  menu: {
    marginTop: 25,
    width: "80%",
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "rgba(221, 0, 255, 0.25)",
    shadowColor: "#9b5ea3",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 3,
  },

  menuItem: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.05)",
  },

  menuText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1C1C1E",
  },
});
