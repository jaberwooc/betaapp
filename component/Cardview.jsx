import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
function Cardview({ data }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text>{data.name}</Text>
        <Text>{data.scoops}</Text>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </View>
    </TouchableOpacity>
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
});
