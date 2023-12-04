import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
const wtklogo = require("./../assets/wtklogo.png");
const wtkAngko = require("./../assets/angkor.png");

export default function LoginScreen() {
  return (
    <ScrollView>
      <View>
        <View style={{ alignItems: "center" }}>
          <Image source={wtklogo} />
        </View>
        <View style={{ width: 360, justifyContent: "center" }}>
          <TextInput
            //onChangeText={handleUserName}

            style={style.TextInputDecorate}
          />
          <TextInput
            //onChangeText={handleUserName}

            style={style.TextInputDecorate}
          />
          <View style={{ alignItems: "flex-end" }}>
            <Text style={style.txtLoginGg} {...{ marginTop: 10 }}>
              Forgot password
            </Text>
          </View>
          <TouchableOpacity style={style.loginBtn}>
            <Text style={style.txtLogin}>Login</Text>
          </TouchableOpacity>
          <Text style={style.txtLoginGg} {...{ marginTop: 10 }}>
            Or
          </Text>
          <TouchableOpacity style={style.loginGgBtn}>
            <Text style={style.txtLoginGg}>Login with Google</Text>
          </TouchableOpacity>
          <Text style={style.txtLoginGg} {...{ marginTop: 10 }}>
            Already have account! Login
          </Text>
        </View>
        <View>
          <Image source={wtkAngko} />
        </View>
      </View>
    </ScrollView>
  );
}
const style = StyleSheet.create({
  TextInputDecorate: {
    marginTop: 20,
    borderWidth: 1,
    height: 50,

    borderColor: "#0073FF",

    borderRadius: 16,
  },
  loginBtn: {
    justifyContent: "center",
    backgroundColor: "#0073FF",

    borderRadius: 50,
    marginTop: 20,
    padding: 5,

    height: 50,
  },
  txtLogin: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  loginGgBtn: {
    justifyContent: "center",
    borderColor: "#0073FF",

    borderWidth: 1.5,

    borderRadius: 50,
    marginTop: 20,
    padding: 5,

    height: 50,
  },
  txtLoginGg: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#0073FF",
  },
});
