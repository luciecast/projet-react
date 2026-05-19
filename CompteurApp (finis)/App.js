import { Button, StyleSheet, Text, View } from 'react-native';
import Compteur from './Compteur';
import { useState } from 'react';

export default function App() {
  const [isPressed, setIsPressed] = useState(false);
  const [isRunning, setIsRunning] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercice : Compteur simple</Text>
      <Text style={styles.instructions}>
        Ce petit programme affiche un compteur qui démarre automatiquement.
        Vous pouvez :
        {"\n"}• Observer son état (en cours / terminé)
        {"\n"}• Le réinitialiser avec le bouton ci‑dessous
      </Text>
      <Compteur reinit={isPressed} maxTime={10} onUpdate={setIsRunning} />
      <Text style={styles.label}>
        Réinitialisé : {isPressed ? "oui" : "non"}
      </Text>
      <Text style={styles.label}>
        Statut : {isRunning ? "en cours" : "terminé"}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => setIsPressed(prev => !prev)}
          title="Réinitialiser"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8e8f775',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 15,
    color: '#000000',
    textAlign: 'center',
  },

  instructions: {
    fontSize: 15,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 20,
    width: '90%',
  },

  label: {
    fontSize: 16,
    color: '#000000',
    marginTop: 10,
  },

  buttonContainer: {
    marginTop: 20,
    width: 160,
  },
});
