import { Text, View} from "react-native";

import { styles } from "./styles";

export function Home(){
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Event Name
      </Text>

      <Text style={styles.eventDate}>
        Friday, 11th November, 2023
      </Text>

    </View>
  )
}