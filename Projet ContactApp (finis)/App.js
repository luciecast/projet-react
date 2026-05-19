import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import UserForm from './src/components/UserForm';
import FlatListDemo from './src/components/FlatlistDemo';

function fakeUsers(n_users) {
  const users = [];
  for (let i = 0; i < n_users; i++) {
    users.push({
      username: i,
      first_name: Math.floor(Math.random() * 1e6),
      last_name: Math.floor(Math.random() * 1e6),
    });
  }
  return users;
}

export default function App() {
  const [users, setUsers] = useState(fakeUsers(10));

  const addNewUser = (data) => {
    setUsers((users) => [
      ...users,
      {
        username: users.length + 1,
        first_name: data.firstName,
        last_name: data.lastName,
      }
    ]);
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Gestion des utilisateurs</Text>
        <Text style={styles.subtitle}>Ajoute un utilisateur ci‑dessous</Text>
      </View>

      <UserForm addNewUser={addNewUser} />

      <FlatListDemo users={users} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f8ecf7',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4e3151',
  },
  subtitle: {
    fontSize: 14,
    color: '#4e3151',
    marginTop: 4,
  },
});
