import React from "react";
import { StyleSheet, Text, Button, View, Image, Pressable } from "react-native";

const Detalles = ({ navigation, route }) => {
  const { data } = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ width: 300, height: 300, margin: 30 }}
          x
          source={{
            uri: data.image,
          }}
        />
        <Text>{data.name}</Text>
        <Text>{data.scoops}</Text>
      </View>
      <View style={{ alignItems: "end" }}>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.text}>Go Back</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Detalles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerinputs: {
    flex: 1,
    padding: 20,
  },

  input: {
    borderColor: "#000000",
    borderBottomWidth: 0.5,
    width: 280,
    height: 60,
    paddingLeft: 5,
    borderRadius: 5,
    margin: 10,
    fontSize: 24,
  },

  button: {
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#008CBA",
    width: 250,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  contim: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 280,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#E8E9E9",
  },
});
