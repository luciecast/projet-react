import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function SmallUser({ user, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: user.img }} style={styles.image} />
      <View>
        <Text style={styles.name}>{user.firstname} {user.lastname}</Text>
        <Text style={styles.gender}>Genre : {user.gender}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#e8d9ed',
    padding:50,
    marginBottom:10,
  },
  image: { width:120, height:120, borderRadius:60, marginRight:10 },
  name: { fontSize:24, fontWeight:'bold', color:'#26461f' },
  gender: { fontSize:14, color:'#0d4124' }
});
