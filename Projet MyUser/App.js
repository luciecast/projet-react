import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import UserList from './src/component/UserList';
import DetailedUser from './src/component/DetailedUser';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [data, setData] = useState([]);

  // Récupération des utilisateurs
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`https://randomuser.me/api/?results=20`);
        const result = await response.json();

        const formattedUsers = result.results.map(user => ({
          firstname: user.name.first,
          lastname: user.name.last,
          gender: user.gender,
          img: user.picture.thumbnail
        }));

        setData(formattedUsers);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Écran liste */}
        <Stack.Screen name="UserListScreen" options={{ title: "Liste des utilisateurs" }}>
          {props => <UserList {...props} data={data} />}
        </Stack.Screen>

        {/* Écran détails */}
        <Stack.Screen name="DetailedUserScreen" options={{ title: "Détails" }}>
          {props => <DetailedUser {...props} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20, backgroundColor:'#f2f2f2' },
  title: { fontSize:24, fontWeight:'bold', color:'#6200ee', marginBottom:20, textAlign:'center' }
});
