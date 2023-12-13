import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";

import { Menu } from "lucide-react-native";
import MainScreen from "./view/Screen/mainscreen";

export default function App() {
  return <MainScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
