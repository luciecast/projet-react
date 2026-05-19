import { ScrollView, Text } from "react-native";

export default function ScrollView(props) {
    const users = props.users; 
    
    return <ScrollView>
        {users.map((user) => 
            <Text key={user.username}>
                {user.first_name} {user.last_name}
            </Text>)}
    </ScrollView>
}