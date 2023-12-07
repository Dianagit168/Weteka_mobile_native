import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Getstart1 from "./view/Screen/get_start1";
import Getstart2 from "./view/Screen/get_start2";
import WelcomeScreen from "./view/Screen/welcome_screen";
import Getstart3 from "./view/Screen/get_start3";
import LoginScreen from "./view/Screen/login";
import Register from "./view/Screen/register";
import ForgotPass from "./view/Screen/forgot_pass";
import VerifyCode from "./view/Screen/verifycode";
import RenewPassword from "./view/Screen/renew_pass";
import HomeScreen from "./view/Screen/home_screen";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <HomeScreen />

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
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
