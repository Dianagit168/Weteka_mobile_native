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

import { HomeScreen, LibraryScreen } from "./view/Screen";
import VideoScreen from "./view/Screen/video_screen";
import ContentScreen from "./view/Screen/contents_screen";
import React from "react";
import DetailVideoScreen from "./view/Screen/detail_videos_screen";

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

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({}) => {
              return <View></View>;
            },
          }}
        />
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Video" component={DetailVideoScreen} />
        <Tab.Screen name="Contents" component={ContentScreen} />
        <Tab.Screen name="Menu" component={LibraryScreen} />
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
