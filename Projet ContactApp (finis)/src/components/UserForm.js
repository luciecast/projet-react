import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function UserForm({ addNewUser }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = () => {
    if (!firstName || !lastName) return;

    addNewUser({ firstName, lastName });

    setFirstName('');
    setLastName('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Prénom"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <TextInput
        placeholder="Nom"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />
      <Button title="Ajouter" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 12,
    borderWidth: 1,
    borderColor: '#c583dd',
    backgroundColor: '#d5bcd54e',
  },
  input: {
    borderWidth: 1,
    borderColor: '#c583dd',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});
