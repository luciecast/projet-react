import { Text, View } from 'react-native';

function CustomComponent(props) {
  return (
    <View>
        <Text>{props.header1}</Text>
    </View>
  );
}

export default CustomComponent;