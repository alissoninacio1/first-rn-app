import { Text, View, TextInput, TouchableOpacity, FlatList} from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home(){

  const participants = ["Alisson", "Valeria","Kira", "Casper", "Khaleesi", "Mephisto", "Perico", "Benji", "Guerita"]

  function handleParticipantAdd() {
    console.log("you added a participant")
  }

  function handleParticipantRemove(name: string) {
    console.log(`you removed the participant ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Event Name
      </Text>

      <Text style={styles.eventDate}>
        Friday, 11th November, 2023
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Participant Name"
          placeholderTextColor="#6b6b6b"
          />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem= {({ item }) => (
          <Participant 
          key = {item}
          name= {item}
          onRemove={() => handleParticipantRemove(item)}
          />
        )}

        showsVerticalScrollIndicator={false}
        ListEmptyComponent= {() => (
          <Text style={styles.listEmptyText}>
            Has anyone arrived to the event yet? Add some participants to the list.
          </Text>
        )}
      />
    </View>
  )
}