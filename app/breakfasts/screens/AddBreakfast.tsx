import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Alert } from "react-native";
import { TextInput } from "react-native-paper";
import ButtonShared from "../../shared/components/ButtonShared";
import {add,getAllBfs} from "../services/breakfast.service";
const AddBreakfast = (props:any) => {
  const [description, setDescription] = useState<string>("");
  const [latitude, setLatitude] = useState<string>("");
  const [longitude, setLongitude] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [places, setPlaces] = useState<string>("");

  const addbf = () => {
    if (latitude==="" || longitude==="" || city==='' || places==='' ||description==='') {
      Alert.alert('All fields are required');
       
     }else{
       
       add(description, Number(longitude), Number(latitude), city, Number(places));
       props.navigation.navigate('Home')
     }
  };
  
  const image = {
    uri:
      "https://www.lopinion.ma/photo/art/grande/55426126-41491399.jpg?v=1618175034",
  };
  return (
    <View>
      <View style={styles.content}>
        <View style={styles.globalViewTitle}>
          <ImageBackground
            source={image}
            style={styles.image}
          ></ImageBackground>
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
        <TextInput
          label="City"
          mode="outlined"
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <TextInput
          label="Places"
          mode="outlined"
          value={places}
          keyboardType={"numeric"}
          onChangeText={(text) => setPlaces(text)}
        />

        <ButtonShared text="Add Assistance" onPress={() => addbf()} />
      </View>
    </View>
  );
};

export default AddBreakfast;

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
