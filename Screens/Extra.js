import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { compose } from "recompose";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import * as Yup from "yup";
import { database, storage } from "../src/config/fb";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Formik } from "formik";
const validations = Yup.object().shape({
  scoops: Yup.number()
    .typeError("Este campo es numérico")
    .max(70, "Número muy grande")
    .required("Obligatorio"),
  name: Yup.string()
    .min(2, "Nombre muy corto")
    .max(50, "Nombre muy largo")
    .required("Obligatorio"),
  brand_name: Yup.string()
    .min(2, "Nombre muy corto")
    .max(50, "Nombre muy largo")
    .required("Obligatorio"),
  category: Yup.string()
    .min(2, "Nombre muy corto")
    .max(50, "Nombre muy largo")
    .required("Obligatorio"),
});
const Extra = () => {
  const [suplements, setSuplements] = useState();
  const [urls, setUrl] = useState({
    uri: "https://img.icons8.com/?size=512&id=111372&format=png",
    w: 50,
    y: 50,
  });
  /*
  const imageprin = async (name) => {
    const pathReference = ref(storage, `images/${name}.jpg`);
    const imageUrl = await getDownloadURL(pathReference);
    setUrl(imageUrl);
  };


  const uploadImage = (uri) => {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.onerror = reject;
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          resolve(xhr.response);
        }
      };

      xhr.open("GET", uri);
      xhr.responseType = "blob";
      xhr.send();
    });
  };
  */
  const categorias = ["Preworkout", "Protein", "Snacks", "Postentreno"];

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    const uriimage = result.assets[0].uri;

    if (result.canceled === false) {
      console.log(uriimage);
      setUrl({ uri: uriimage, w: "100%", y: "100%" });
    }
  };
  const cargar = async () => {
    const newref = doc(collection(database, "supplements"));
    await setDoc(newref, suplements);
    alert("imagen subida");
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: "",
          brand_name: "",
          category: "",
          scoops: "",
          image: "",
        }}
        onSubmit={(values, { resetForm }) => {
          //conso
          setSuplements({
            name: values.name,
            brand_name: values.brand_name,
            category: values.category,
            scoops: values.scoops,
            image: urls.uri,
          });
          cargar();
          resetForm({
            name: "",
            brand_name: "",
            category: "",
            scoops: "",
            image: "",
          });
          setUrl({
            uri: "https://img.icons8.com/?size=512&id=111372&format=png",
            w: 50,
            y: 50,
          });
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.containerinputs}>
            <TouchableOpacity style={styles.contim} onPress={pickImage}>
              <Image
                style={{ width: urls.w, height: urls.y }}
                source={{
                  uri: urls.uri,
                }}
              />
            </TouchableOpacity>
            <TextInput
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              placeholder="Name"
              style={styles.input}
            />
            <TextInput
              onChangeText={handleChange("brand_name")}
              onBlur={handleBlur("brand_name")}
              value={values.brand_name}
              placeholder="Brand name"
              style={styles.input}
            />

            <TextInput
              onChangeText={handleChange("category")}
              onBlur={handleBlur("category")}
              value={values.category}
              placeholder="Category"
              style={styles.input}
            />

            <TextInput
              onChangeText={handleChange("scoops")}
              onBlur={handleBlur("scoops")}
              value={values.scoops}
              placeholder="Scoops"
              style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.text}>Sumbit</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Extra;

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
/*

      uploadImage(uriimage)
        .then((resolve) => {
          console.log(resolve);
          const pathReference = ref(storage, `images/yyp.jpg`);
          uploadBytes(pathReference, resolve)
            .then((resolve) => {
              console.log("Imagen subida correctamente");
              imageprin("yyp");
            })
            .catch((error) => {
              console.log("Error al subir la imagen");
            });
        })
        .catch((error) => {
          console.log(error);
        });
        */
