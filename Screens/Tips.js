import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const Tips = () => {
  const tips = [
    {
      title: "Solo Tomar Suplementos?",
      Description:
        'Los suplementos complementan una dieta saludable, pero no componen, en sí mismos, una dieta saludable. "Algunos tratan de engañarse diciendo que, aunque estén comiendo mal, tomar muchas vitaminas les ayuda a resolver sus deficiencias de nutrientes", afirma Heber. Nada más lejos de la realidad, una nutrición adecuada es fundamental para gozar de buena salud, y las vitaminas y los suplementos son valiosos para asegurar que se obtienen todos los nutrientes que el cuerpo necesita y que mejoran, pero no sustituyen, un buen programa de ingesta diaria de alimentos nutritivos que incluya la cantidad adecuada de proteínas, frutas y verduras.',
    },

    {
      title: "Seguir las instrucciones de la etiqueta ",
      Description:
        "Seguir las instrucciones de la etiqueta es fundamental para sacar el máximo beneficio a los suplementos. Muchas vitaminas y otros suplementos deben tomarse con alimentos y un vaso grande de agua. Hay muchas razones para ello.",
    },
    {
      title: "Cuantos cafeina puedo ingerir cuando hago ejercicio?",
      Description:
        "Según investigaciones actuales, la mejor ingesta de cafeína para mejorar el rendimiento del ejercicio es de 3 a 6 mg por kg de peso corporal. Para una persona de 80 kg, sería alrededor de 240-480 mg. En perspectiva, 400 mg de cafeína es similar a alrededor de cuatro tazas de café o tres bebidas energéticas.",
    },
  ];
  return (
    <ScrollView style={styles.container}>
      {tips.map((e) => (
        <View>
          <Text style={styles.title}>{e.title}</Text>
          <Text style={styles.text}>{e.Description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Tips;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  text: {
    fontSize: 20,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    textAlign: "justify",
    margin: 15,
    paddingBottom: 20,
  },
  title: {
    margin: 15,
    paddingTop: 30,
    fontSize: 26,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    textAlign: "justify",
  },
});
