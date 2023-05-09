import React from "react";
import { StyleSheet, Button, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate("extra")} title="Extra" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
