import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  TextInput,
} from "react-native";
import { number } from "yup";

const Cont = () => {
  const [count, setcount] = useState(0);
  const [limite, setlimite] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de cafeina</Text>
      <View style={styles.containerb}>
        <Text style={styles.text}>peso: </Text>
        <TextInput
          onChangeText={setlimite}
          value={limite}
          style={{ borderBottomWidth: 1, width: 30, fontSize: 20 }}
          keyboardType="numeric"
        />

        <Text style={styles.text}>kg</Text>
      </View>

      <View style={styles.containerb}>
        <Text style={styles.text}>limite de caffeina: </Text>
        <Text style={styles.text}>{limite * 6} mg</Text>
      </View>
      <Text style={styles.text}>cantidad de scoops o bebedias energeticas</Text>
      <View style={styles.containerb}>
        <Pressable
          style={styles.button}
          onPress={() => {
            count * 200 > limite
              ? alert("Cuidado! pasaste tu limite")
              : setcount(count + 1);
          }}
        >
          <Text style={styles.cont}>{count} </Text>
          <Text style={styles.cont}>+</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => (count < 1 ? setcount(count) : setcount(count - 1))}
        >
          <Text style={styles.cont}>-</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cont;
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
  },
  containerb: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  text: {
    fontSize: 25,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    textAlign: "justify",
    margin: 15,
  },
  title: {
    paddingTop: 30,
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
    textAlign: "justify",
  },
  cont: {
    margin: 10,
    paddingTop: 30,
    fontSize: 30,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    textAlign: "justify",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    borderRadius: 4,
    borderColor: "black",
    flexDirection: "row",
  },
});
