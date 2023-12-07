import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import brandingColor from "./branding_color";
const DATA = [
  {
    content: "Content1",
    tamNail: "TAMNAIL1",
  },
  {
    content: "Content21",
    tamNail: "TAMNAIL2",
  },
  {
    content: "Content3",
    tamNail: "TAMNAIL3",
  },
];

export default function ListContentCourse({
  content,
  btn,
  onPress,
  height,
  width,
  isFlatList = true,
}) {
  return (
    <View>
      <View style={styleListContentCourse.listContentCourse}>
        <Text style={styleListContentCourse.txtStyle}>{content}</Text>
        <Text onPress={onPress} style={styleListContentCourse.txtBtnStyle}>
          {btn}
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator
        horizontal
        data={DATA}
        renderItem={({ item }) => (
          <View
            style={{
              marginTop: 10,

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                marginRight: 10,
                marginBottom: 7,
                height: height,
                width: width,
                borderRadius: 16,
                backgroundColor: brandingColor.blue30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>{item.tamNail}</Text>
            </View>
            <Text>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
}
const styleListContentCourse = StyleSheet.create({
  listContentCourse: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 20,
  },
  txtStyle: {
    fontWeight: "bold",
    color: brandingColor.blueBlack100,
  },
  txtBtnStyle: {
    color: brandingColor.blue60,
  },
});
