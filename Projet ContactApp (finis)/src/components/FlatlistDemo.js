import { FlatList, Text, View, StyleSheet } from "react-native";

export default function FlatListDemo({ users }) {
  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.username.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.name}>
            {item.first_name} {item.last_name}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#c583dd',
    marginBottom: 10,
    backgroundColor: '#d5bcd54e',
  },
  name: {
    fontSize: 16,
    color: '#4e3151',
  },
});
