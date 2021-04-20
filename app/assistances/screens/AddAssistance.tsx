import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import add from "../services/assistance.service";
const AddAssistance = () => {
  const [description, setDescription] = useState<string>("");
  const [latitude, setLatitude] = useState<string>("");
  const [longitude, setLongitude] = useState<string>("");

  const addAssistance = () => {
    // add(description, Number(longitude), Number(latitude));
  };

  return (
    <View>
      <View style={styles.gobal}>
        
      </View>
      <View style={styles.content}>
        <TextInput
          multiline
          label="Description"
          mode="outlined"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <TextInput
          label="Latitude"
          mode="outlined"
          value={latitude}
          onChangeText={(text) => setLatitude(text)}
        />
        <TextInput
          label="Longitude"
          mode="outlined"
          value={longitude}
          onChangeText={(text) => setLongitude(text)}
        />
        <Button
          mode="contained"
          style={{ marginTop: 10, backgroundColor: "#2389c4" }}
          onPress={() => addAssistance()}
        >
          Add
        </Button>
      </View>
    </View>
  );
};

export default AddAssistance;

const styles = StyleSheet.create({
  gobal: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#3275a8",
    padding: 12,
    borderWidth: 5,
    borderColor: "#094470",
    borderRadius: 12,
    height: "100%",
    justifyContent: "center",
  },
});
