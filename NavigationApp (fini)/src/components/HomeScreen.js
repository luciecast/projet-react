import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Mon Projet React Native</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Accueil")}
      >
        <Text style={styles.buttonText}>Accueil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Information")}
      >
        <Text style={styles.buttonText}>Information</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Autre")}
      >
        <Text style={styles.buttonText}>Autre Page</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcf4',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 40,
    color: '#000',
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#d6e5fb',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: '#000000',
    marginVertical: 10,
    width: '60%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#000000',
    fontSize: 16,
  },
});
