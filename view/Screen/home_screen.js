import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import HeaderBar from "../components/header_bar";
import brandingColor from "../components/branding_color";
import Input from "../components/input";
import BtnCustom from "../components/button_custom";
import BtnNoBack from "../components/button_noback";
import Search from "../components/search";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ paddingTop: 15 }}>
      <View>
        <HeaderBar scan={"scan"} bell={"bell-outline"} />
      </View>
      <ScrollView style={{ marginHorizontal: 20 }}>
        <Search
          object={"Explore"}
          leadingIcon={"email-outline"}
          placeHolder={"Find your course"}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
