import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
const wtklogo = require("./../../assets/wtklogo.png");

export default function Register() {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
      <ScrollView contentContainerStyle={{ paddingTop: 200 }}>
        <View>
          <View>
            <Image source={wtklogo} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
