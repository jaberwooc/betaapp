import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
function Cardview({ data, h }) {
  return h === true ? (
    <View>
      <Text style={styles.text}>{data}</Text>
    </View>
  ) : (
    <View>
      <Image
        style={{ width: 100, height: 100 }}
        x
        source={{
          uri: data.image,
        }}
      />
      <Text>{data.name}</Text>
      <Text>{data.scoops}</Text>
    </View>
  );
}

export default Cardview;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    flex: 1,
    height: 160,
    width: 150,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    paddingLeft: 6,
    paddingBottom: 8,
    paddingTop: 4,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});
