import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { TextInput } from "react-native-paper";
import ButtonShared from "../../shared/components/ButtonShared";
import add from "../services/assistance.service";
const AddAssistance = () => {
  const [description, setDescription] = useState<string>("");
  const [latitude, setLatitude] = useState<string>("");
  const [longitude, setLongitude] = useState<string>("");

  const addAssistance = () => {
    // add(description, Number(longitude), Number(latitude));
  };
  const image = {
    uri:
      "https://www.lopinion.ma/photo/art/grande/55426126-41491399.jpg?v=1618175034",
  };
  return (
    <View>
      <View style={styles.content}>
        <View style={styles.globalViewTitle}>
          <ImageBackground source={image} style={styles.image}>
            <Text style={styles.title}>Add Assistance Place</Text>
          </ImageBackground>
        </View>
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
          keyboardType={"numeric"}
          onChangeText={(text) => setLatitude(text)}
        />
        <TextInput
          label="Longitude"
          mode="outlined"
          value={longitude}
          keyboardType={"numeric"}
          onChangeText={(text) => setLongitude(text)}
        />

        <ButtonShared text="Add Assistance" onPress={() => addAssistance()} />
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
    backgroundColor: "skyblue",
    padding: 25,
    borderRadius: 12,
    height: "100%",
  },
  title: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
  globalViewTitle: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "80%",
    justifyContent: "center",
    flex: 1,
    borderRadius: 50,
  },
});
