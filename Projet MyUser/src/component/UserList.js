import { FlatList, StyleSheet } from 'react-native';
import SmallUser from './smallUser';

export default function UserList({ data, navigation }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <SmallUser
          user={item}
          onPress={() => navigation.navigate("DetailedUserScreen", { user: item })}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: { paddingBottom: 20 }
});
