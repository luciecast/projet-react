import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import CustomComponent from './CustomComponent';
import { useEffect, useState } from 'react';

function randomNumber(i) {
  return Math.floor(i * Math.random());
}

export default function App() {
  const [nb1, setNb1] = useState(randomNumber(10));
  const [nb2, setNb2] = useState(randomNumber(5));
  const [result, setResult] = useState(nb1 + nb2);
  const [userAnswer, setUserAnswer] = useState('');
  const [counter, setCounter] = useState(30);
  const [canSubmit, setCanSubmit] = useState(true);
  const [displayAnswer, setDisplayAnswer] = useState('');

  useEffect(() => {
    setResult(nb1 + nb2);
  }, [nb1, nb2]);

  useEffect(() => {
    if (userAnswer !== '') {
      setDisplayAnswer(Number(userAnswer) === result ? 'Bonne réponse' : 'Mauvaise réponse');
    } else {
      setDisplayAnswer('');
    }
  }, [userAnswer, result]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCanSubmit(counter > 0);
  }, [counter]);

  const randomOperation = () => {
    setNb1(randomNumber(10));
    setNb2(randomNumber(5));
    setCounter(30);
    setUserAnswer('');
    setDisplayAnswer('');
  };

  const handleSubmit = () => {
    setDisplayAnswer(Number(userAnswer) === result ? 'Bonne réponse' : 'Mauvaise réponse');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercice : Calcul mental chronométré</Text>
      <Text style={styles.instructions}>
        Vous devez résoudre l’opération affichée avant la fin du temps.
        {"\n"}• Entrez votre réponse dans le champ prévu.
        {"\n"}• Le bouton "Submit" se désactive lorsque le temps est écoulé.
        {"\n"}• Le bouton "New Game" génère une nouvelle opération.
      </Text>

      <Text style={styles.feedback}>{displayAnswer}</Text>
      <Text style={styles.timer}>Temps restant : {counter}s</Text>
      <Text style={styles.operation}>
        {nb1} + {nb2} = ?
      </Text>
      <TextInput
        placeholder="Entrez votre réponse"
        keyboardType="numeric"
        value={userAnswer}
        onChangeText={setUserAnswer}
        style={styles.input}
      />

      <View style={styles.buttonGroup}>
        <Button title="New Game" onPress={randomOperation} />
      </View>

      <View style={styles.buttonGroup}>
        <Button title="Submit" disabled={!canSubmit} onPress={handleSubmit} />
      </View>

      <CustomComponent header1="APPUIE SUR LE BOUTON" />
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf3fd82',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
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

  feedback: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 10,
  },

  timer: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000000',
  },

  operation: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
    color: '#000000',
  },

  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    width: '60%',
    padding: 8,
    marginVertical: 10,
    backgroundColor: '#ffffff',
  },

  buttonGroup: {
    marginTop: 10,
    width: 150,
  },
});
