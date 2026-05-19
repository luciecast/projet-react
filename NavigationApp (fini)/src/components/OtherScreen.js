import { View, Text, StyleSheet } from 'react-native';

export default function InfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Information</Text>
      <Text style={styles.text}>
        Cette application est un projet de navigation React Native.
        Vous pouvez naviguer entre différentes pages via le menu.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
    backgroundColor:'#fcf2fc7a',
  },
  title: {
    fontSize:22,
    fontWeight:'600',
    marginBottom:20,
    color:'#000000',
  },
  text: {
    fontSize:16,
    textAlign:'center',
    color:'#000000',
  },
});
