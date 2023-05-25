import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { database, storage, storageRef } from "../src/config/fb";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Cardview from "../component/Cardview";

function Home({ navigation }) {
  const [listasupps, Setsuplement] = useState([]);
  const [All, Setall] = useState([]);

  const categorias = ["All", "Preworkout", "Protein", "Snacks", "Postentreno"];
  useEffect(() => {
    const collectref = collection(database, "supplements");
    const q = query(collectref, orderBy("name", "desc"));

    const unscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        brand_name: doc.data().brand_name,
        category: doc.data().category,
        name: doc.data().name,
        scoops: doc.data().scoops,
        id: doc.id,
        image: doc.data().image,
      }));
      Setsuplement([...data]);
      Setall([...data]);
    });

    return unscribe;
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{ margin: 10, with: 150 }}
        data={categorias}
        horizontal
        renderItem={({ item }) =>
          item === "All" ? (
            <TouchableOpacity
              onPress={() => Setsuplement(All)}
              style={[styles.containerh, { width: 80 }]}
            >
              <Cardview h={true} data={item} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                Setsuplement(All);
                const temp = listasupps.filter((e) => e.category === item);
                Setsuplement(temp);
              }}
              style={styles.containerh}
            >
              <Cardview h={true} data={item} />
            </TouchableOpacity>
          )
        }
        keyExtractor={(item) => item}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listasupps}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("detalles", { data: item })}
            style={styles.container}
          >
            <Cardview data={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
    </View>
  );
}

export default Home;
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
  containerh: {
    margin: 5,
    flex: 1,
    height: 50,
    width: 160,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    paddingLeft: 6,
    paddingBottom: 8,
    paddingTop: 4,
    borderRadius: 25,
  },
});
