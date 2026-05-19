import { useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useDispatch } from "react-redux";
import { addPhoto } from "../Photos/PhotoSlice";

export default function CameraScreen() {
  // Caméra avant ou arrière et la permission
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();

  const cameraRef = useRef(null);
  const dispatch = useDispatch();

  if (!permission) {
    return <View />;
  }

  // si la caméra n'est pas autorisée
  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>
          Autorisation caméra nécessaire
        </Text>

        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Autoriser la caméra</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Fonction pour prendre une photo
  const takePicture = async () => {
    if (!cameraRef.current) return;

    const photo = await cameraRef.current.takePictureAsync();

    // envoie la photo dans Redux
    dispatch(
      addPhoto({
        id: Date.now(),
        uri: photo.uri,
        folder: null,
      })
    );
  };

  // change entre camera avant et arriere
  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
        <View style={styles.overlay}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.buttonText}>Retourner</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  camera: {
    flex: 1,
  },

  // Placement des boutons
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 50,
    gap: 25,
  },

  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 20,
  },

  permissionText: {
    color: "#fff",
    fontSize: 17,
    opacity: 0.8,
    marginBottom: 20,
    textAlign: "center",
  },

  button: {
    backgroundColor: "rgba(255,255,255,0.15)",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
  },

  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },

  // Bouton style iphone
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 6,
    borderColor: "#fff",
    backgroundColor: "rgba(255,255,255,0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
});