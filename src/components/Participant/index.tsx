import  { View, Text} from 'react-native';
import { styles } from './styles';

export function Participant() {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                Alisson Inacio
            </Text>
        </View>
    )
}