import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import brandingColor from "./branding_color";

export default function Search({ object, leadingIcon, placeHolder }) {
  return (
    <View>
      <Text style={style.objStyle}>{object}</Text>
      <View style={style.inputContainer}>
        <Ionicons name={leadingIcon} style={style.iconCust} />
        <TextInput
          cursorColor={brandingColor.blueBlack60}
          style={{ width: "75%" }}
          placeholder={placeHolder}
          placeholderTextColor={brandingColor.blueBlack30}
        />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    height: 50,

    borderColor: brandingColor.blueBlack100,
    borderWidth: 1,
    borderRadius: 16,
    alignItems: "center",
  },
  objStyle: {
    fontSize: 16,
    color: brandingColor.blueBlack100,
    paddingBottom: 10,
    fontWeight: "bold",
  },
  iconCust: {
    fontSize: 25,
    marginLeft: 10,
    marginRight: 10,
    color: brandingColor.blueBlack60,
  },
});
