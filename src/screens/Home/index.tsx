import React from "react";
import { Text, View, TextInput, TouchableOpacity} from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home(){

  function handleParticipantAdd() {
    console.log("you clicked")
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

      <Participant />
      <Participant />
      <Participant />
    </View>
  )
}