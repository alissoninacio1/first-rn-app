import React, {useState} from "react";

import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home(){

  const [participants, setParticipants] = useState(["Kira"])

  function handleParticipantAdd() {
    if(participants.includes("Alisson")) {
      return Alert.alert("Participant registered", "It already exists a participant with this name on the list")
    }

    setParticipants(prevState => [...prevState, "Ana"])
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remove",  `Do you want to remove the participant "${name}" from the list?`, [
      {
        text: "Yes",
        onPress: () => Alert.alert("Removed")
      },
      {
        text: "No",
        style: "cancel"
      }
    ])
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