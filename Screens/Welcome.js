import React from "react";
import { View, Button, StyleSheet, Pressable, Text, Image } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://seeklogo.com/images/M/mitto-nutrition-suplementos-logo-9F127FA479-seeklogo.com.png",
        }}
        style={{ width: 250, height: 250, margin: 100 }}
      ></Image>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Tabnavigations")}
      >
        <Text style={styles.text}>Go to home</Text>
      </Pressable>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
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
