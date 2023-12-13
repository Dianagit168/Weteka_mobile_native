import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";

import { Home } from "lucide-react-native";
import { Library } from "lucide-react-native";
import { Film } from "lucide-react-native";
import { Newspaper } from "lucide-react-native";

import { Menu } from "lucide-react-native";
import ContentScreen from "./contents_screen";
import DetailVideoScreen from "./detail_videos_screen";
import HomeScreen from "./home_screen";
import LibraryScreen from "./library_screen";

const Tab = createBottomTabNavigator();
type TabBarOptions = {
  tabBarShowLabel: boolean;
  headerShown: boolean;
  tabBarStyle: {
    position: "absolute";
    bottom: number;
    right: number;
    left: number;
    elevation: number;
    height: number;
  };
};

export default function MainScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({}) => {
              return <Home color="black" size={17} strokeWidth={2.7} />;
            },
          }}
        />
        <Tab.Screen
          name="Library"
          component={LibraryScreen}
          options={{
            tabBarIcon: ({}) => {
              return <Library color="black" size={17} strokeWidth={2.7} />;
            },
          }}
        />
        <Tab.Screen
          name="Video"
          component={DetailVideoScreen}
          options={{
            tabBarIcon: ({}) => {
              return <Film color="black" size={17} strokeWidth={2.7} />;
            },
          }}
        />
        <Tab.Screen
          name="Contents"
          component={ContentScreen}
          options={{
            tabBarIcon: ({}) => {
              return <Newspaper color="black" size={17} strokeWidth={2.7} />;
            },
          }}
        />
        <Tab.Screen
          name="Menu"
          component={LibraryScreen}
          options={{
            tabBarIcon: ({}) => {
              return <Menu color="black" size={17} strokeWidth={2.7} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
