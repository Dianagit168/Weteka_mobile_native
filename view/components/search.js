import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import brandingColor from "./branding_color";

export default function Search({ object, leadingIcon, placeHolder }) {
  return (
    <View style={{ paddingBottom: 20 }}>
      <Text style={{ color: brandingColor.blueBlack100, paddingBottom: 10 ,fontWeight:'bold'}}>
        {object}
      </Text>
      <View style={style.inputContainer}>
        <Icon name={leadingIcon} style={style.iconCust} />
        <TextInput style={{ width: "75%" }} placeholder={placeHolder} />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    height: 50,

    borderColor: brandingColor.blueBlack100,
    borderWidth: 1.5,
    borderRadius: 16,
    alignItems: "center",
  },
  iconCust: {
    fontSize: 25,
    marginLeft: 10,
    marginRight: 10,
    color: brandingColor.blueBlack100,
  },
});
