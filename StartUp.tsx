import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import SinglelineTextInputNativeComponent from "react-native/Libraries/Components/TextInput/RCTMultilineTextInputNativeComponent";
import {
  backgroundColor,
  borderColor,
} from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { SafeAreaView} from "react-native";


interface StartUpScreenProps
{
  navigation:any;
}

const StartUp = (props:StartUpScreenProps) => {
  const start = () => props.navigation.navigate("LogIn");
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("./assets/animation_500_kxq0ijcw.gif")}
      />

      <View style={styles.getstarted}>
        <Text style={styles.welcome1}>Hotel Manager</Text>
        <Text style={styles.welcome}>Stay connected with us!</Text>
        <Text style={styles.welcome2}>Sign in with account.</Text>
        <TouchableOpacity style={styles.btn} onPress={start}>
          <Text style={styles.btntxt}>Get Started</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
export default StartUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffa500",
    alignItems: "center",
    justifyContent: "center",
  },
  getstarted: {
    flex: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    bottom: -200,
    height: 900,
    width: 414,
  },

  logo: {
    height: 350,
    width: 250,
    top: 250,
    alignContent: "center",
    justifyContent: "center",
    right: 20,
    left: 5,
  },
  logo2: {
    height: 100,
    width: 100,
    top: 150,
    alignContent: "center",
    justifyContent: "center",
    right: 20,
    left: 10,
  },
  welcome1: {
    color: "black",
    fontSize: 28,
    bottom: -30,
    fontStyle: "normal",
    fontWeight: "bold",
    flex: 0,
    left: 110,
    width: 300,
    height: 80,
  },
  welcome: {
    color: "black",
    fontSize: 28,
    bottom: -15,
    fontStyle: "normal",
    fontWeight: "bold",
    flex: 0,
    left: 10,
    width: 300,
    height: 80,
  },
  welcome2: {
    color: "black",
    fontSize: 13,
    bottom: -20,
    fontStyle: "normal",
    fontWeight: "bold",
    flex: 0,
    left: 10,
    width: 300,
    height: 80,
  },
  btn: {
    borderRadius: 100,
    flex: 0,
    top: 140,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "black",
    height: 55,
    width: 170,
    left: 140,
  },
  btntxt: {
    top: 0,
    textAlign: "center",
    color: "white",
    alignContent: "center",
    justifyContent: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});
