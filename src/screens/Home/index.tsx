import React, {useState} from "react";

import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home(){

  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')//here you put the initial state value

  function handleParticipantAdd() {
    if(participants.includes(participantName)) {
      return Alert.alert("Participant registered", "It already exists a participant with this name on the list")
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {

    Alert.alert("Remove",  `Do you want to remove the participant "${name}" from the list?`, [
      {
        text: "Yes",
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant != name))
      },
      {
        text: "No",
        style: "cancel"
      }
    ])
  }


  function displayDate() {
    //display the data according to the day
    const currentDate: Date = new Date();
    return currentDate.toDateString();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
      📝 Attendance
      </Text>

      <Text style={styles.eventDate}>
        {displayDate()}
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Participant Name"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName} //{text => setParticipantName(text)} - is a larger code
          value = {participantName}
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