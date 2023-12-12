import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import brandingColor from "./branding_color";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const wtklogo = require("./../../assets/wtklogo.png");

export default function HeaderBar({ search, bell, scan }) {
  return (
    <View style={styleHB.hbContainer}>
      <View>
        <Image source={wtklogo} style={{ resizeMode: "contain", width: 120 }} />
      </View>
      <View style={styleHB.iconContainer}>
        <Ionicons name={search} style={styleHB.iconStyle} />
        <Icon name={bell} style={styleHB.iconStyle} />
        <Ionicons name={scan} style={styleHB.iconStyle} />
      </View>
    </View>
  );
}
const styleHB = StyleSheet.create({
  hbContainer: {
    height: 80,
    width: 400,

    zIndex: 1,
    paddingHorizontal: 24,
    paddingVertical: 12,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainer: {
    flexDirection: "row",

    height: 25,
  },
  iconStyle: {
    fontSize: 25,
    marginLeft: 15,
  },
});
