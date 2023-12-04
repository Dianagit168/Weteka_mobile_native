import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Getstart1 from "./Screen/get_start1";
import Getstart2 from "./Screen/get_start2";
import WelcomeScreen from "./Screen/welcome_screen";
import Getstart3 from "./Screen/get_start3";
import LoginScreen from "./Screen/login";

export default function App() {
  return (
    <View style={styles.container}>
      
      <LoginScreen />

      <StatusBar style="auto" />
    </View>
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
//<WelcomeScreen /> <Getstart1 /><Getstart3 />
