import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetailedUser({ route }) {
  const {user} = route.params;

  return (
    <View style={styles.container}>
      <Image source={{uri: user.img}} style={styles.image} />
      <Text style={styles.name}>{user.firstname} {user.lastname}</Text>
      <Text style={styles.gender}>Genre : {user.gender}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:50,
    backgroundColor:'#e8d9ed',
    alignItems:'center',
    shadowOpacity:0.2,
    shadowRadius:5,
  },
  image: { width:120, height:120, borderRadius:60, marginBottom:15 },
  name: { fontSize:24, fontWeight:'bold', color:'#26461f'},
  gender: { fontSize:16, color:'#0d4124' }
});
