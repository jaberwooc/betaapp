import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import { database } from "../src/config/fb";

const Extra = ({ navigation }) => {
  const [suplements, setSuplements] = useState([]);
  const sups = {
    marca: "C4",
    name: "C4 Ultimate",
    category: "PreWorkout",
    scoops: 15,
    sabor: "skittles",
  };

  async function cargar() {
    const newref = doc(collection(database, "supplements"));

    await setDoc(newref, sups);
  }
  return (
    <View>
      {suplements.map((a) => (
        <>
          <Text>{a.marca}</Text>
          <Text>{a.name}</Text>
          <Text>{a.category}</Text>
          <Text>{a.scoops}</Text>
          <Text>{a.sabor}</Text>
        </>
      ))}
      <Button onPress={() => cargar()} title="Mostrar lista" />
      <Button onPress={() => navigation.goBack()} title="Home" />
    </View>
  );
};

export default Extra;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
