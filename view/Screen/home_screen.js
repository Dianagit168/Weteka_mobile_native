import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import HeaderBar from "../components/header_bar";
import brandingColor from "../components/branding_color";
import Input from "../components/input";
import BtnCustom from "../components/button_custom";
import BtnNoBack from "../components/button_noback";
import Search from "../components/search";
import ListContentCourse from "../components/listContentCourse";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ paddingTop: 15 }}>
      <View>
        <HeaderBar scan={"scan"} bell={"bell-outline"} />
      </View>
      <ScrollView style={{ marginHorizontal: 20 }}>
        <Search
          object={"Explore"}
          leadingIcon={"search"}
          placeHolder={"Find your courses"}
        />
        <ListContentCourse content={"Continue Course"} btn={"See all"} />
        <View style={styleWidgetHomeScreen.containerOfChart}>
          <Text> Chart do not complete</Text>
        </View>
        <View style={styleWidgetHomeScreen.containerOfChart}>
          <Text> Chart do not complete</Text>
        </View>
        <ListContentCourse content={"Popular Course"} btn={"See all"}  height={110} width={150} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styleWidgetHomeScreen = StyleSheet.create({
  containerOfChart: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    height: 100,
    borderRadius: 16,
    backgroundColor: brandingColor.blue3,
  },
});
