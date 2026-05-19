import { Text, View, TouchableOpacity, StyleSheet } from "react-native"
import { useDispatch } from "react-redux"
import { removeFolder } from "./FolderSlice"

export default function SingleTask(props) {

    const title = props.title; 
    const dispatch = useDispatch(); 

    const onRemove = () => {
        dispatch(removeFolder(props.id))
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity style={styles.deleteButton} onPress={onRemove}>
          <Text style={styles.deleteText}>Supprimer</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(255, 59, 48, 0.25)",
    shadowColor: "#FF3B30",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 3,
    marginVertical: 8,
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1C1C1E",
    marginBottom: 10,
    letterSpacing: 0.5,
  },

  deleteButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    shadowColor: "#FF3B30",
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },

  deleteText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});
