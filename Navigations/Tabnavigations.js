import React from "react";
import Home from "../Screens/Home";
import Extra from "../Screens/Extra";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Detalles from "../Screens/Detalles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../Screens/Welcome";
import Tips from "../Screens/Tips";
import Cont from "../Screens/Cont";
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
export default function Stacknavigations() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="welcome" component={Welcome} />
      <HomeStack.Screen name="detalles" component={Detalles} />
      <HomeStack.Screen name="Tabnavigations" component={Tabnavigations} />
    </HomeStack.Navigator>
  );
}
export function Tabnavigations() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "extra") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else if (route.name === "tips") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="extra" component={Extra} />
      <Tab.Screen name="tips" component={Tips} />
      <Tab.Screen name="contador" component={Cont} />
    </Tab.Navigator>
  );
}
