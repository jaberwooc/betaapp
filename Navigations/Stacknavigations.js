import React from "react";
import Home from "../Screens/Home";
import Extra from "../Screens/Extra";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();
const Stacknavigations = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="extra" component={Extra} />
    </Stack.Navigator>
  );
};

export default Stacknavigations;
