import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addPhoto } from '../../redux/photosSlice';

export default function SinglePhoto(props) {
  const dispatch = useDispatch();
  const category = props.category; 
  const btnTitle = category === "fav" ? "Remove" : "Add";

  const handleButtonPress = () => {
    if (category === "fav") {
    } else {
      dispatch(addPhoto({
        id: Date.now(),
        uri: props.large
      }));
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("PhotoDetails", {
            photo: { id: props.id, uri: props.large }
          })
        }
        style={styles.photoWrapper}
      >
        <Image
          source={props.thumbnail}
          style={styles.thumbnail}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>{btnTitle}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(221, 0, 255, 0.25)",
    shadowColor: "#9b5ea3",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 3,
  },

  photoWrapper: {
    marginBottom: 10,
  },

  thumbnail: {
    width: 70,
    height: 70,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.6)",
    borderWidth: 1,
    borderColor: "rgba(221, 0, 255, 0.25)",
    shadowColor: "#9b5ea3",
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },

  button: {
    backgroundColor: "#9b5ea3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    shadowColor: "#9b5ea3",
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },

  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});
