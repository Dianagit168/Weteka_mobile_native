import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Input({ object, leadingIcon, trailingIcon }) {
  return (
    <View style={{ paddingBottom: 20 }}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "#0073FF", paddingBottom: 10 }}>{object}</Text>
        <Text style={{ color: "red", paddingBottom: 10, marginLeft: 7 }}>
          *
        </Text>
      </View>
      <View style={style.inputContainer}>
        <Icon name={leadingIcon} style={style.iconCust} />
        <TextInput style={{ width: "75%" }} />
        <Icon name={trailingIcon} style={style.iconCust} />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    height: 50,

    borderColor: "#0073FF",
    borderWidth: 1.5,
    borderRadius: 16,
    alignItems: "center",
  },
  iconCust: {
    fontSize: 25,
    marginLeft: 10,
    marginRight: 10,
    color: "#0073FF",
  },
});
