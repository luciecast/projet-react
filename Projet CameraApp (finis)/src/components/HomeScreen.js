import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.appIcon}
        onPress={() => navigation.navigate("Photos")}
      >
        <Image source={require("../../assets/iconGallery.png")} style={styles.icon} />
        <Text style={styles.label}>Photos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.appIcon}
        onPress={() => navigation.navigate("Folders")}
      >
        <Image source={require("../../assets/iconFolder.png")} style={styles.icon} />
        <Text style={styles.label}>Dossiers</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.appIcon}
        onPress={() => navigation.navigate("Camera")}
      >
        <Image source={require("../../assets/iconCamera.png")} style={styles.icon} />
        <Text style={styles.label}>Appareil Photo</Text>
      </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: 80,
    backgroundColor: "#F5F7FA",
    flex: 1,
  },

  appIcon: {
    width: 120,
    height: 140,
    margin: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(221, 0, 255, 0.25)",
    shadowColor: "#9b5ea3",
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },

  icon: {
    width: 70,
    height: 70,
    borderRadius: 18,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.6)",
    borderWidth: 1,
    borderColor: "rgba(221, 0, 255, 0.2)",
    shadowColor: "#9b5ea3",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  label: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: "600",
    color: "#1C1C1E",
    letterSpacing: 0.3,
  },
});
