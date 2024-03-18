import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  Settings,
} from "react-native";
import { TouchableOpacity } from "react-native";
import {
  backgroundColor,
  borderColor,
  color,
} from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { TextInput } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Bold } from "react-feather";


interface LogInScreenProps
{
  navigation:any;
}

const LogIn=(props:LogInScreenProps)=> {
  const logedin=()=>props.navigation.navigate("MainMenu")
  const register=()=>props.navigation.navigate("SignUp")
  return (
    <View style={styles.bg}>
      <Image
        style={styles.loginGif}
        source={require("./assets/animation_200_kxpz88gg.gif")}
      />
      <Text style={styles.logintxt}>Log In</Text>

      <View style={styles.bg1}>
        <View>
          <Text style={styles.Email1}> Email:</Text>

          <FontAwesome style={styles.User1} name="user-o" color="#808080" />

          <TextInput
            style={styles.textInput}
            placeholder="Your Email or username"
            placeholderTextColor="#808080"
          />
          <Feather
            style={styles.check}
            name="check-circle"
            color="green"
            size={20}
          />
        </View>

        <View style={styles.pss}>
          <Text style={styles.password1}> Password:</Text>

          <FontAwesome style={styles.lock} name="lock" color="#808080" />

          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor="#808080"
            secureTextEntry={true}
          />
          <Feather
            style={styles.eyeview}
            name="eye-off"
            color="#808080"
            size={20}
          />

          <Text style={styles.frgt}>Forgot Password?</Text>
        </View>

        <View style={styles.btn1}>
          <TouchableOpacity onPress={logedin} style={styles.btn}>
            <Text style={styles.btntxt}>Log In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contain}>
          <Text>Not registered Yet?</Text>
          <TouchableOpacity onPress={register}>
            <Text style={styles.asking}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
export default LogIn;
const styles = StyleSheet.create({
  frgt: {
    fontWeight: "bold",
    top: 30,
    left: 270,
  },
  eyeview: {
    left: 350,
    top: 18,
  },
  check: {
    left: 350,
    top: -19,
  },
  contain: {
    left: 143,
    top: 220,
    alignContent: "center",
  },
  asking: {
    color: "#ffa500",
    fontWeight: "bold",
    left: 40,
    textDecorationLine: "underline",
  },
  btn1: {
    top: 190,
    left: 132,
    justifyContent: "center",
  },
  btn: {
    borderRadius: 100,
    backgroundColor: "#ffa500",
    height: 55,
    width: 150,
    alignContent: "center",
    justifyContent: "center",
  },
  btntxt: {
    alignContent: "center",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
  },
  bg: {
    flex: 1,
    backgroundColor: "#ffa500",
    alignItems: "center",
    justifyContent: "center",
  },
  pss: {
    alignContent: "center",
    justifyContent: "center",
  },
  password1: {
    fontSize: 15,
    fontWeight: "bold",
    top: 70,
    left: -132,
    justifyContent: "center",
    textAlign: "center",
  },
  passwordInput: {
    width: 280,
    left: 60,
    top: 43,
  },
  lock: {
    fontSize: 15,
    top: 80,
    left: 40,
    height: 30,
  },
  Email1: {
    fontSize: 15,
    fontWeight: "bold",
    top: 30,
    left: 30,
  },
  User1: {
    fontSize: 15,
    top: 40,
    left: 40,
    height: 30,
  },

  textInput: {
    width: 350,
    top: 4,
    paddingLeft: 60,
    color: "#05375a",
  },
  bg1: {
    flex: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    bottom: -200,
    height: 900,
    width: 414,
  },
  logintxt: {
    textAlign: "center",
    left: 4,
    fontSize: 30,
    fontWeight: "bold",
    top: 150,
  },
  loginGif: {
    resizeMode: "center",
    top: 200,
    left: 7,
  },
});
