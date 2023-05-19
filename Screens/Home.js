import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Button, View, Image, FlatList } from "react-native";
import { database, storage, storageRef } from "../src/config/fb";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Cardview from "../component/Cardview";
import { ref } from "firebase/storage";

function Home({ navigation }) {
  const [listasupps, Setsuplements] = useState([]);
  const [urls, setUrl] = useState();

  useEffect(() => {
    const collectref = collection(database, "supplements");
    const q = query(collectref, orderBy("name", "desc"));
    const unscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        brand_name: doc.data().brand_name,
        category: doc.data().category,
        name: doc.data().name,
        scoops: doc.data().scoops,
        id: doc.data().id,
      }));
      Setsuplements([...data]);
    });

    return unscribe;
  }, []);

  const imageprint = async () => {
    const pathReference = ref(storage, "images/c4orig.jpeg");
    const imageUrl = await getDownloadURL(pathReference);
    setUrl({ image: imageUrl });
  };
  return (
    <View>
      <FlatList
        data={listasupps}
        renderItem={({ item }) => <Cardview data={item} />}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <Text>{urls}</Text>

      <Button onPress={() => navigation.navigate("extra")} title="Extra" />
    </View>
  );
}

export default Home;
